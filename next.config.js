// next.config.js
const slug = require("remark-slug");
const link = require("rehype-autolink-headings");

const isProd = process.env.NODE_ENV === "production";

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [slug],
    rehypePlugins: [link]
  }
});

module.exports = withMDX({
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "" : "",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  api: {
    bodyParser: false
  },
  generateEtags: false
});
