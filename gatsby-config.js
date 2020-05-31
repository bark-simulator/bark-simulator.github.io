module.exports = {
  siteMetadata: {
    title: `BARK`,
    description: `Kick off the next generation of behavior model development for autonomous driving.`,
    author: `@hart`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/images/bark_logo_head.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": "text-4xl text-gray-800 mt-12 mb-1",
                "heading[depth=2]": "text-3xl text-gray-800 mt-10",
                "heading[depth=3]": "text-2xl text-gray-800 mt-2",
                "image": "mt-2 mb-2",
                "a": "text-blue-700",
                "list[ordered=false]": "list-disc list-inside",
                "list[ordered=true]": "list-decimal list-inside",
                paragraph: "para",
              }
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`
        ],
      },
    },
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        classPrefix: "language-",
        inlineCodeMarker: null,
        aliases: {},
        showLineNumbers: false,
        noInlineHighlight: false,
        // Customize the prompt used in shell output
        // Values below are default
        prompt: {
          user: "root",
          host: "localhost",
          global: false,
        },
        // escapeEntities: {},
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}