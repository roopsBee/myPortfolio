import React from 'react'
import { Container } from '@material-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({}))

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>Index</Container>
    </Layout>
  )
}

export default IndexPage
