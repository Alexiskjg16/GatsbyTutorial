import React from "react"
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BlogStyles from './blog.module.scss'
import Head from '../components/head'



const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulFaithArtInspiration (sort: 
       { fields:date,
       order: DESC }
     ) {
       edges {
         node {
           title
           date (formatString: "MM Do, YYYY")
           content { json }
         }
       }
     }
     }
    `)
 
console.log(data)
    
    return(
        <Layout>
          <Head title="Blog" />
            <h1> Blog Page!</h1>
            <ol className={BlogStyles.posts}>
                {data.allContentfulFaithArtInspiration.edges.map((edges) => {
                    return (
                      <li className={BlogStyles.post}>
                        <Link to={`/blog/${edges.node.title}`}>
                        <h2>{edges.node.title}</h2>
                        <p>{edges.node.date}</p>
                        </Link>
                      </li>
                    )
                })}
                
            </ol>
        </Layout>
    )
}

export default BlogPage