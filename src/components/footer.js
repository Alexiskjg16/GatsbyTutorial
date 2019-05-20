import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
       site {
          siteMetadata {
              author
          }
      }
    }
  `)
    return (
        <footer>
            <h6>{data.site.siteMetadata.author} © 2019</h6>
        </footer>
    )
}

export default Footer