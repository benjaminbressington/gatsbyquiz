const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const _ = require('lodash')
const parseFilepath = require(`parse-filepath`)
const fs = require('fs')
const mkdirp = require('mkdirp')

// make sure quizzes folder and demo.mdx file exist for the filesystem source or it will error
exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState()
  const dir = path.join(program.directory, 'quizzes')
  mkdirp.sync(dir)
  const demoFile = require.resolve(`./quizzes/demo.mdx`)
  fs.copyFile(demoFile, dir + '/demo-quiz.mdx', err => {
    if (err) throw err
    console.log('demo.mdx was copied to /quizzes folder')
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField, createNode } = actions

  if (node.internal.type === 'Mdx' && node.frontmatter.type === 'quiz') {
    const parent = getNode(node.parent)
    const parsedFilePath = parseFilepath(parent.relativePath)
    const exercise = parsedFilePath.dir
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
      name: 'exercise',
      value: exercise
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
    /**
      * When shipping NPM modules, they typically need to be either
      * pre-compiled or the user needs to add bundler config to process the
      * files. Gatsby lets us ship the bundler config with the theme, so
      * we never need a lib-side build step.  Since we dont pre-compile the
      * theme, this is how we let webpack know how to process files.
      */
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(require.resolve(`gatsby-theme-quiz`)),
          use: [loaders.js()],
        },
      ],
    }
  }
  )
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
  {
    allMdx(sort: {fields: frontmatter___index}) {
      group(field: fields___exercise) {
        fieldValue
        totalCount
        edges {
          node {
            frontmatter {
              points
            }
            fields {
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
    // We sum the points of each question present in the exercice and pass it
    // to the context
    const totalPoints = exercise.edges
      .map(edge => edge.node.frontmatter.points)
      .reduce((total, points) => total + points)

    exercise.edges.forEach((edge, index) => {
      const next = index === exercise.edges.length - 1 ? null : exercise.edges[index + 1].node
      const prev = index === 0 ? null : exercise.edges[index - 1].node

      createPage({
        path: edge.node.fields.quizSlug,
        component: require.resolve(`./src/templates/quiz-template.js`),
        context: {
          quizSlug: edge.node.fields.quizSlug,
          totalPoints,
          next,
          prev
        }
      })
    })
  })
}
