import React from "react"
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BlogStyles from './blog.module.scss'
import Head from '../components/head'



const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPosts (
       sort: {
         fields:publishedDate,
         order: DESC,
       }
     ) {
       edges {
         node {
           title1
           slug
           publishedDate (formatString:"MMM D, YYYY")
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
                {data.allContentfulBlogPosts.edges.map((edges) => {
                    return (
                      <li className={BlogStyles.post}>
                        <Link to={`/blog/${edges.node.slug}`}>
                        <h2>{edges.node.title1}</h2>
                        <p>{edges.node.publishedDate}</p>
                        </Link>
                      </li>
                    )
                })}
                
            </ol>
        </Layout>
    )
}

export default BlogPage