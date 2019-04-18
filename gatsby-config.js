const path = require('path')

module.exports = {
  siteMetadata: {
    // siteUrl: config.siteUrl + pathPrefix,
    title: 'Quiz with Gatsby + MDX',
    description: 'Just create beautiful quizzes with Gatsby and MDX!',
    keywords: ['Quiz', 'Gatsby', 'MDX'],
    author: 'raphadeluca',
    social: { twitter: 'https://twitter.com/raphadeluca/' },
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {}
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
