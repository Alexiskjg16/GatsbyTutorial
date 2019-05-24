import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const query = graphql`
query (
    $slug:String!  ) {
    markdownRemark (
      fields: {    slug: {  eq: $slug   }  }
    ) {
      frontmatter {
        title
      }
      html
    }
  }`

const Blog = () => {
    return (
        <Layout>
            <h1>{props.data}</h1>
        </Layout>
    )
}

export default Blog