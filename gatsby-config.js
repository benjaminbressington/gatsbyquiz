const path = require('path')

module.exports = {
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
