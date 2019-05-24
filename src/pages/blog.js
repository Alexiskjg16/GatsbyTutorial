import React from "react"
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'



const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
         edges {
           node {
             frontmatter {
               title
               date
             }
             fields {
               slug
           }
           }
         }
       }
 }
    `)
 
console.log(data)
    
    return(
        <Layout>
            <h1> Blog Page!</h1>
            <ol>
                {data.allMarkdownRemark.edges.map(({node}) => {
                    return <li><Link to={`/blog/${node.fields.slug}`}>{node.frontmatter.title}</Link>
                    <p>{node.frontmatter.date}</p></li>
                })}
                
            </ol>
        </Layout>
    )
}

export default BlogPage