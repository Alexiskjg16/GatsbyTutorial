import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const AboutPage = () => {
    return(
        <Layout>
            <Head title="AboutMe" />
            <p> I am married to my wonderful husband of 36 years, and have two beautiful grown daughters. I believe that we were all 
                created in the image of our God, and since he is the master creator we all have creativity within us.  I like to
                 share my creative inspirations with others, whether it's with rubber stamps or mixed media, scrapbooking or card making.
                   I am excited to share what I have learned with others through my company Shared Inspiration through classes held
                  at a variety of local venues. I have been stamping and scrapbooking since 2004 when my sister introduced me to Stampin'
                   Up.  I have been a designer for Sparkle n Sprinkle, and have had my own line of rubber stamp sets.</p>

                <p>Have More Questions? <Link to="/contact">Click Here</Link></p>
        </Layout>
    )
}

export default AboutPage