import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import { Link } from 'gatsby'
import ContactStyles from './contact.module.scss'



const ContactPage = () => {
    return(
        <Layout>
            <Head title="Contact" />
            <section className={ContactStyles.Links}>
             <a href="https://www.facebook.com/faithartinspiration/"> Facebook</a>
             <a href="https://www.instagram.com/faithartinspiration/">Instagram</a>
             <a href="mailto:stampinhands04@gmail.com">Email</a>
             </section>
        </Layout>
    )
}

export default ContactPage