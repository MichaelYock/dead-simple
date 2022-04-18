import type { GatsbyConfig } from "gatsby"
const config: GatsbyConfig = {
  siteMetadata: {
    title: "Dead Simple",
    siteUrl: "http://www.deadsimple.website",
    description: "No-nonsense web design and development for small businesses"
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", `gatsby-plugin-styled-components`, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon-32x32.png"
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
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-FN83X4ZTSC", // Google Analytics / GA
        //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
        //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        //optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  }
]
};
export default config