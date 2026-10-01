/** Strip legacy WordPress/Divi chrome so React layout + TOC can own the page shell. */
export function prepareBlogHtml(html: string): string {
  let out = html;

  out = out.replace(/<pee\b/gi, "<p").replace(/<\/pee>/gi, "</p>");

  out = out.replace(
    /<header[^>]*class="[^"]*blog-masthead[^"]*"[\s\S]*?<\/header>/gi,
    ""
  );
  out = out.replace(
    /<figure[^>]*class="[^"]*blog-hero-figure[^"]*"[\s\S]*?<\/figure>/gi,
    ""
  );
  out = out.replace(
    /<aside[^>]*class="[^"]*blog-rail[^"]*"[\s\S]*?<\/aside>/gi,
    ""
  );

  out = out.replace(
    /<section[^>]*class="[^"]*section--gray[^"]*"[\s\S]*?Keep Reading[\s\S]*?<\/section>/gi,
    ""
  );
  out = out.replace(
    /<section[^>]*class="[^"]*section[^"]*"[\s\S]*?fleet-cta[\s\S]*?<\/section>/gi,
    ""
  );

  out = out.replace(/<\/?main[^>]*>/gi, "");
  out = out.replace(/<p>\s*(?:<!--[\s\S]*?-->\s*)*<\/p>/gi, "");

  return out.trim();
}
