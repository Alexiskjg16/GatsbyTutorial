
module.exports = {
  siteMetadata: {
    title: 'Harry Potter Fansite',
    author: 'Alexis Grisham'
  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path:`${__dirname}/src/`}
    },
    'gatsby-transformer-remark'
  ]
 
}
