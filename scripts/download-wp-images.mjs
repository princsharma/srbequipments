/**
 * download-wp-images.mjs
 *
 * Downloads all WordPress media images referenced in this Next.js project,
 * saves them to public/images/, and rewrites every source file so the
 * WordPress URLs are replaced with local /images/... paths.
 *
 * Usage:  node scripts/download-wp-images.mjs
 *
 * Options (env vars):
 *   DRY_RUN=1   – print what would happen, but don't write anything
 *   SKIP_DL=1   – skip downloading (just rewrite URLs, useful if already downloaded)
 */

import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_IMAGES_DIR = path.join(ROOT, "public", "images");

const DRY_RUN = process.env.DRY_RUN === "1";
const SKIP_DL = process.env.SKIP_DL === "1";

// ─── Helpers ────────────────────────────────────────────────────────────────

function log(...args) {
  console.log("[wp-images]", ...args);
}

/** Download a URL to destPath. Returns a promise. Follows redirects. */
function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(destPath);

    const request = proto.get(url, (res) => {
      // Follow redirects (up to 5 hops)
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(destPath);
        return download(res.headers.location, destPath).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }

      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    });

    request.on("error", (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });

    // 30-second timeout
    request.setTimeout(30_000, () => {
      request.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

/** Collect all files with given extensions, recursively under dir */
function collectFiles(dir, exts) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // skip node_modules / .next / .git
      if (["node_modules", ".next", ".git"].includes(entry.name)) continue;
      results.push(...collectFiles(full, exts));
    } else if (exts.some((e) => entry.name.endsWith(e))) {
      results.push(full);
    }
  }
  return results;
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  // 1. Ensure output directory exists
  if (!DRY_RUN) {
    fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
  }

  // 2. Collect all source files to scan
  const sourceFiles = collectFiles(ROOT, [".tsx", ".ts", ".jsx", ".js", ".json"]);
  log(`Scanning ${sourceFiles.length} source files...`);

  // 3. Extract unique WordPress image URLs
  //    Matches srbequipment.ca AND staging*.srbequipment.ca upload URLs
  const WP_URL_PATTERN =
    /https?:\/\/(?:staging\d+\.)?srbequipment\.ca\/wp-content\/uploads\/[\w\-./]+\.(?:jpg|jpeg|png|webp|gif|svg)/gi;

  const urlSet = new Set();
  for (const file of sourceFiles) {
    const content = fs.readFileSync(file, "utf-8");
    const matches = content.match(WP_URL_PATTERN) || [];
    matches.forEach((u) => urlSet.add(u));
  }

  const urls = [...urlSet].sort();
  log(`Found ${urls.length} unique WordPress image URLs.`);

  if (urls.length === 0) {
    log("Nothing to do - no WordPress image URLs found.");
    return;
  }

  // 4. Build mapping: original URL -> { localFile, publicPath }
  //
  //    Preserve the upload sub-path to avoid filename collisions.
  //    e.g. .../2025/11/coolant-repair-1.jpg
  //      -> public/images/2025/11/coolant-repair-1.jpg
  //      -> /images/2025/11/coolant-repair-1.jpg

  const mapping = new Map();

  for (const url of urls) {
    const cleanUrl = url.split("?")[0]; // strip query string

    const uploadsIdx = cleanUrl.indexOf("/wp-content/uploads/");
    const uploadsRelPath = cleanUrl.slice(uploadsIdx + "/wp-content/uploads/".length);

    const localFile = path.join(PUBLIC_IMAGES_DIR, uploadsRelPath);
    const publicPath = "/images/" + uploadsRelPath.replace(/\\/g, "/");

    mapping.set(url, { localFile, publicPath });
  }

  // 5. Download images (with concurrency limit)
  if (!SKIP_DL) {
    log(`\nDownloading images${DRY_RUN ? " (DRY RUN - skipping actual download)" : ""}...`);

    const CONCURRENCY = 5;
    const entries = [...mapping.entries()];
    let downloaded = 0;
    let skipped = 0;
    let failed = 0;
    const failedUrls = [];

    for (let i = 0; i < entries.length; i += CONCURRENCY) {
      const batch = entries.slice(i, i + CONCURRENCY);
      await Promise.all(
        batch.map(async ([url, { localFile }]) => {
          if (DRY_RUN) {
            log(`  [DRY] Would download: ${url}`);
            return;
          }

          if (fs.existsSync(localFile)) {
            skipped++;
            log(`  ~  Already exists: ${path.relative(ROOT, localFile)}`);
            return;
          }

          fs.mkdirSync(path.dirname(localFile), { recursive: true });

          try {
            await download(url, localFile);
            downloaded++;
            log(`  OK  ${url}`);
          } catch (err) {
            failed++;
            failedUrls.push({ url, error: err.message });
            log(`  FAIL  ${url}  (${err.message})`);
          }
        })
      );
    }

    log(`\nDownload summary:`);
    log(`  Downloaded : ${downloaded}`);
    log(`  Already existed : ${skipped}`);
    log(`  Failed : ${failed}`);

    if (failedUrls.length > 0) {
      log(`\nFailed URLs:`);
      failedUrls.forEach(({ url, error }) => log(`  - ${url} => ${error}`));
    }
  } else {
    log("SKIP_DL=1 - skipping download step.");
  }

  // 6. Rewrite source files - replace all WP URLs with local paths
  log(`\nRewriting source files${DRY_RUN ? " (DRY RUN)" : ""}...`);

  let totalReplacements = 0;
  let filesChanged = 0;

  for (const file of sourceFiles) {
    let content = fs.readFileSync(file, "utf-8");
    let changed = false;

    for (const [url, { publicPath }] of mapping) {
      if (content.includes(url)) {
        content = content.split(url).join(publicPath);
        changed = true;
        totalReplacements++;
      }
    }

    if (changed) {
      filesChanged++;
      const rel = path.relative(ROOT, file);
      if (DRY_RUN) {
        log(`  [DRY] Would update: ${rel}`);
      } else {
        fs.writeFileSync(file, content, "utf-8");
        log(`  Updated: ${rel}`);
      }
    }
  }

  log(`\nRewrote ${totalReplacements} URL occurrences across ${filesChanged} files.`);

  log("\nDone! Next steps:");
  log("  1. Run `npm run dev` to verify images load correctly.");
  log("  2. You can now remove the srbequipment.ca entries from next.config.ts remotePatterns.");
}

main().catch((err) => {
  console.error("[wp-images] Fatal error:", err);
  process.exit(1);
});
