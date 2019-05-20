import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import HeaderStyles from './header.module.scss'

const NavBar = () => {
    const data = useStaticQuery(graphql`
      query {
         site {
            siteMetadata {
                title
            }
        }
      }
    `)
    
    return (
        <header className={HeaderStyles.header}>
            <h1> <Link to="/" className={HeaderStyles.title}>
            {data.site.siteMetadata.title}
            </Link></h1>
            <ul className={HeaderStyles.navList}>
                <li>
                    <Link to="/" className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem}> Home</Link>
                </li>
                <li>
                 <Link to="/about" className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem}> About Me</Link>
                </li>
                <li>
                 <Link to="/contact" className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem}>Contact Me</Link>
                </li>
                <li>
                 <Link to="/blog" className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem}>My Blog</Link>
                </li>
            </ul>
        </header>
    )
}

export default NavBar