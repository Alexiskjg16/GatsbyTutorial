
module.exports = {
  siteMetadata: {
    title: 'Faith Art Inspiration',
    author: 'Alexis Grisham'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve:'gatsby-source-contentful',
      options: {
        spaceId: 'owmi0k2tk5w7',
        accessToken: 'xMlsGgrC4qhyVXQgHaShhcsJG7XHxUDxuVqBxKaa3XQ'
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path:`${__dirname}/src/`}
    },
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
                 maxWidth: 750,
                 linkImagesToOriginal: false
          }}
        ]
      }
    },
  ],
}
