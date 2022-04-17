import type { GatsbyConfig } from "gatsby"
const config: GatsbyConfig = {
  siteMetadata: {
    title: "Dead Simple",
    siteUrl: "http://www.deadsimple.website",
    description: "No-nonsense websites for small businesses"
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", `gatsby-plugin-styled-components`, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
export default config