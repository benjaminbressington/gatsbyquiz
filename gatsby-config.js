const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: [
          'gatsby-theme-quiz',
        ]
      }
    },
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
