
module.exports = {
  siteMetadata: {
    title: 'Harry Potter Fansite',
    author: 'Alexis Grisham'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve:'gatsby-source-contentful',
      options: {
        spaceId: 'i2qzg2n3b0vw',
        accessToken: '3lQ3Gscxbc4h_uA9gcVQoQy1Fwxm13KaDAHVSXGGOn0'
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
