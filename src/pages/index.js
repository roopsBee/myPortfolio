import React from 'react'
import { Container } from '@material-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>home</Container>
    </Layout>
  )
}

export default IndexPage
