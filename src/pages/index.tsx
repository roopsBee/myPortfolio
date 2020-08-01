import React from 'react'
import Loadable from 'react-loadable'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import BioScene from '../components/bioScene/BioScene'

const WelcomeScene = Loadable({
  loader: () => import('../components/welcomeScene/index'),
  loading: () => null,
})

const IndexPage = ({ transitionStatus }) => {
  return (
    <>
      <BioScene />
      <WelcomeScene />
      <Layout>
        <SEO title="Home" />
      </Layout>
    </>
  )
}

export default IndexPage
