// next.config.js

const isProd = process.env.NODE_ENV === "production";

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
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
