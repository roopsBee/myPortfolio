import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import WelcomeScene from '../components/welcomeScene/index'

const IndexPage = () => {
  return (
    <>
      <WelcomeScene />
      <Layout>
        <SEO title="Home" />
      </Layout>
    </>
  )
}

export default IndexPage
