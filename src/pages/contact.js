import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm/ContactForm'
import '../contact.css'

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactForm />
    </Layout>
  )
}

export default Contact
