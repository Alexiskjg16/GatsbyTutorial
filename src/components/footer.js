import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import FooterStyles from './footer.module.scss'

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
        <footer className={FooterStyles.footer}>
            <h6>{data.site.siteMetadata.author} © 2019</h6>
        </footer>
    )
}

export default Footer