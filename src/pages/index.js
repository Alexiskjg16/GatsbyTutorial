import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
return (
    <Layout>
        <Head title="Home"/>
        <h1> Hello!</h1>
             <h2> Need Someone to Kill the Dark Lord?<Link to="/about">How About Me?</Link></h2>
    </Layout>
)


    // return (
    //      <div>
    //          <Header />
    //          <h1> Hello!</h1>
    //          <h2> Need Someone to Kill the Dark Lord?<Link to="/about">How About Me?</Link></h2>
    //          <Footer />
    //      </div>
    // )
}

export default IndexPage