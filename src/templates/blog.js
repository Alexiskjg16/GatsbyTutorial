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
query( $title: String! ) {
   contentfulFaithArtInspiration(title: {eq: $title}){
     title
     date(formatString: "MMMM D, YYYY")
     content {
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
          <Head title={props.data.contentfulFaithArtInspiration.title} />
         <h1>{props.data.contentfulFaithArtInspiration.title}</h1>
         <p>{props.data.contentfulFaithArtInspiration.date}</p>
         {documentToReactComponents(props.data.contentfulFaithArtInspiration.body.json, options)}
        </Layout>
    )
}

export default Blog