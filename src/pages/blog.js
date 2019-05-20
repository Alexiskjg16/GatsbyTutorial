import React from "react"
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'



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
           }
         }
       }
 }
    `)
    const allData = []
    for (let i=0; i < data.length; i++){
        allData.push(
            <div>
            <h2>{data.allMarkdownRemark.title}</h2>
            <p>{data.allMarkdownRemark.date}</p>
            </div>
        )
    }

    
    return(
        <Layout>
            <h1> Blog Page!</h1>
            <ol>
                <li>{allData}</li>
                
            </ol>
        </Layout>
    )
}

export default BlogPage