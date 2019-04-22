const path = require('path')
const emoji = require(`remark-emoji`)

module.exports = {
  siteMetadata: {
    siteUrl: 'https://inspiring-kare-1888f6.netlify.com/',
    title: 'Quiz with Gatsby + MDX',
    description: 'Just create beautiful quizzes with Gatsby and MDX!',
    keywords: ['Quiz', 'Gatsby', 'MDX'],
    author: 'raphadeluca',
    social: { twitter: 'https://twitter.com/raphadeluca/' },
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `quizzes`,
        path: `quizzes`,
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
