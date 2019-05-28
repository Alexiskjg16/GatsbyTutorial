import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'


// export const query = graphql`
// query( $slug:String! ) {
//     markdownRemark (
//       fields: {    slug: {  eq: $slug   }  }
//     ) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }`

export const query = graphql`
query( $slug: String! ) {
   contentfulBlogPosts(slug: {eq: $slug}){
     title1
     publishedDate(formatString: "MMMM D, YYYY")
     body {
       json
     }
   }
}
`

const Blog = (props) => {
  const options = {
      renderNode: {
        "embedded-asset-block": (node) => {
          const alt = node.data.target.fields.title['en-US']
          const url = node.data.target.fields.file['en-US'].url
            return <img alt={alt} src={url} />
        }
      }
  }

    return (
        <Layout>
          <Head title={props.data.contentfulBlogPosts.title1} />
         <h1>{props.data.contentfulBlogPosts.title1}</h1>
         <p>{props.data.contentfulBlogPosts.publishedDate}</p>
         {documentToReactComponents(props.data.contentfulBlogPosts.body.json, options)}
        </Layout>
    )
}

export default Blog