import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm/ContactForm'
import PageTransition from '../components/transitions/PageTransition'
import pageTransitionStyles from '../components/transitions/pageTransitionStyles'
import BioScene from '../components/bioScene/BioScene'
import '../contact.css'

const Contact = ({ transitionStatus }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageTransition
        transitionStatus={transitionStatus}
        transitionStyles={pageTransitionStyles}
      >
        <ContactForm />
        <BioScene />
      </PageTransition>
    </Layout>
  )
}

export default Contact
