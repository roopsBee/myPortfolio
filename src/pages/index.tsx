import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import WelcomeScene from '../components/welcomeScene/index'
import PageTransition from '../components/PageTransition'
import pageTransitionStyles from '../pageTransitionStyles'

const IndexPage = ({ transitionStatus }) => {
  return (
    <>
      <PageTransition
        transitionStatus={transitionStatus}
        transitionStyles={pageTransitionStyles}
      >
        <WelcomeScene />
        <Layout>
          <SEO title="Home" />
        </Layout>
      </PageTransition>
    </>
  )
}

export default IndexPage
