import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const AboutPage = () => {
    return(
        <Layout>
            <h1> All About Me, Harry J. Potter!</h1>
            <p> Hello, my name is Harry. I am a wizard! You can find me sneaking around the halls of Hogwarts, hiding under a cloak in
                Hogsmead, or riding a centaur in the Forbidden Forest with my best friends Ron and Hermione. When I am in class I like to 
                talk back to teachers and not pay attention to important lessons, yet with the help of brilliant Hermione Ron and I still 
                manage to pass our classes. </p>

                <p>Wanna know more? <Link to="/contact">Click Here</Link></p>
        </Layout>
    )
}

export default AboutPage