import React from 'react'
import Loadable from 'react-loadable'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const WelcomeScene = Loadable({
  loader: () => import('../components/welcomeScene/index'),
  loading: () => null,
})

const IndexPage = ({ transitionStatus }) => {
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
