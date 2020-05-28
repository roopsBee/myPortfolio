import React from 'react'
import { Container } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'
import PortfolioCardBack from '../components/card/portfolioCardBack'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Catto" } }) {
        frontmatter {
          title
          description
          tech
        }
      }
    }
  `)
  const { description, title, tech } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <PortfolioCardBack
          tech={tech}
          description={description}
          title={title}
        />
      </Container>
    </Layout>
  )
}

export default IndexPage
