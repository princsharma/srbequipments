<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="s"
>
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>XML Sitemap — SRB Equipment</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: Arial, "Segoe UI", sans-serif;
            background: linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%);
            color: #172033;
            min-height: 100vh;
            padding: 2rem 1rem 3rem;
          }
          .wrap { max-width: 1040px; margin: 0 auto; }
          header {
            background: linear-gradient(135deg, #101827, #263449);
            color: #fff;
            border-left: 5px solid #fff200;
            border-radius: 1rem;
            padding: 1.75rem 2rem;
            box-shadow: 0 12px 36px rgb(15 23 42 / 0.16);
            margin-bottom: 1.5rem;
          }
          header h1 { font-size: 1.6rem; font-weight: 700; }
          header p {
            margin-top: 0.55rem;
            color: #d5deeb;
            font-size: 0.95rem;
            line-height: 1.6;
          }
          .meta { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem; }
          .pill {
            display: inline-flex;
            align-items: center;
            background: #fff;
            border: 1px solid #d9e0e9;
            color: #263449;
            font-size: 0.82rem;
            font-weight: 700;
            padding: 0.45rem 0.85rem;
            border-radius: 9999px;
            box-shadow: 0 1px 3px rgb(15 23 42 / 0.06);
          }
          .card {
            background: #fff;
            border: 1px solid #d9e0e9;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 4px 24px rgb(15 23 42 / 0.07);
          }
          .table-wrap { overflow-x: auto; }
          table { width: 100%; border-collapse: collapse; min-width: 660px; }
          thead { background: #f3f6f9; }
          th {
            text-align: left;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.07em;
            text-transform: uppercase;
            color: #64748b;
            padding: 0.9rem 1.1rem;
            border-bottom: 1px solid #d9e0e9;
          }
          td {
            padding: 0.9rem 1.1rem;
            border-bottom: 1px solid #edf0f4;
            font-size: 0.87rem;
            vertical-align: middle;
          }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #fffef2; }
          a {
            color: #0f172a;
            font-weight: 600;
            text-decoration: underline;
            text-decoration-color: #eab308;
            text-underline-offset: 3px;
            overflow-wrap: anywhere;
          }
          a:hover { color: #1e293b; text-decoration-color: #0f172a; }
          .priority-high { color: #0f172a; font-weight: 700; }
          .priority-mid { color: #334155; font-weight: 600; }
          .priority-low { color: #64748b; }
          .freq {
            display: inline-block;
            background: #f1f5f9;
            color: #475569;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 0.2rem 0.55rem;
            border-radius: 0.375rem;
            white-space: nowrap;
          }
          footer { margin-top: 1.25rem; text-align: center; font-size: 0.82rem; color: #64748b; }
          footer a { font-weight: 600; }
          @media (max-width: 600px) {
            body { padding: 1rem 0.75rem 2rem; }
            header { padding: 1.35rem; }
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <header>
            <h1>XML Sitemap</h1>
            <p>
              Human-readable sitemap for <strong>SRB Equipment</strong>, truck and trailer repair in Edmonton.
              Search engines use the XML sitemap; this page is for your review.
            </p>
          </header>

          <div class="meta">
            <span class="pill">
              <xsl:value-of select="count(s:urlset/s:url)" /> URLs indexed
            </span>
            <span class="pill">Sitemap protocol 0.9</span>
          </div>

          <div class="card">
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th style="width: 50%;">URL</th>
                    <th>Last modified</th>
                    <th>Change frequency</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="s:urlset/s:url">
                    <xsl:sort select="s:loc" />
                    <tr>
                      <td>
                        <a>
                          <xsl:attribute name="href"><xsl:value-of select="s:loc" /></xsl:attribute>
                          <xsl:value-of select="s:loc" />
                        </a>
                      </td>
                      <td><xsl:value-of select="substring(s:lastmod, 1, 10)" /></td>
                      <td><span class="freq"><xsl:value-of select="s:changefreq" /></span></td>
                      <td>
                        <xsl:choose>
                          <xsl:when test="s:priority &gt;= 0.8">
                            <span class="priority-high"><xsl:value-of select="s:priority" /></span>
                          </xsl:when>
                          <xsl:when test="s:priority &gt;= 0.6">
                            <span class="priority-mid"><xsl:value-of select="s:priority" /></span>
                          </xsl:when>
                          <xsl:otherwise>
                            <span class="priority-low"><xsl:value-of select="s:priority" /></span>
                          </xsl:otherwise>
                        </xsl:choose>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </div>
          </div>

          <footer>
            <p>
              Sitemap for
              <a href="https://srbequipment.ca">srbequipment.ca</a>
              · Referenced in <a href="/robots.txt">robots.txt</a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
