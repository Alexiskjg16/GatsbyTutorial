const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
// const { createNodeField } = actions

// if (node.internal.type === 'MarkdownRemark') {
//     const slug = path.basename(node.fileAbsolutePath, '.md')

//     createNodeField({
//         node,
//         name: 'slug',
//         value: slug
//     })
// }
// }

module.exports.createPages = async ({ graphql, actions }) => {
const { createPage } = actions
const blogTemplate = path.resolve('./src/templates/blog.js')
const res = await graphql(`
  query {
    allContentfulFaithArtInspiration {
        edges {
            node {
                    title
                }
        }
    }
  }
`)

res.data.allContentfulFaithArtInspiration.edges.forEach((edges) => {
    createPage({
        component: blogTemplate,
        path: `/blog/${edges.node.title}`,
        context: {
            title: edges.node.title
        }
    })
})

}