const path = require('path')
const _ = require('lodash')
const parseFilepath = require(`parse-filepath`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent)
    const parsedFilePath = parseFilepath(parent.relativePath)
    const quiz = parsedFilePath.dir
    const quizSlug = (parsedFilePath.name === 'index')
      ? `/`
      : _.kebabCase(`/${ parsedFilePath.dir }${ parsedFilePath.name }/`)

    createNodeField({
      node,
      name: 'quizSlug',
      value: quizSlug
    })
    // This node is created to group (cf graphQL query) all Mdx files that are in the same
    // folder under the same "exercise"
    createNodeField({
      node,
      name: 'quiz',
      value: quiz
    })
  }
}

// webpack config to switch from absolute path to relatives one
// need a delete cache if implemented on an already existing project
exports.onCreateWebpackConfig = ({ stage, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      // implement relative path
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  }
  )
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  {
    allMdx(sort: {fields: frontmatter___index}) {
      group(field: fields___quiz) {
        fieldValue
        totalCount
        edges {
          node {
            fields {
              quiz
              quizSlug
            }
          }
        }
      }
    }
  }
  `)
  // a group is a bunch of question grouped by the exercise node created
  // in onCreateNode
  const { group } = result.data.allMdx

  group.forEach(exercise => {
    exercise.edges.forEach((edge, index) => {
      const next = index === exercise.edges.length - 1 ? null : exercise.edges[index + 1].node
      const prev = index === 0 ? null : exercise.edges[index - 1].node

      createPage({
        path: edge.node.fields.quizSlug,
        component: require.resolve(`./src/templates/quiz-template.js`),
        context: {
          quizSlug: edge.node.fields.quizSlug,
          next,
          prev
        }
      })
    })
  })
}
