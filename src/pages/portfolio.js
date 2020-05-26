import React from 'react'
import { Container } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import PortfolioCard from '../components/portfolioCard'

const useStyles = makeStyles(theme => ({}))

const Portfolio = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              summary
              tech
              title
              url
              Image {
                childImageSharp {
                  fluid(maxWidth: 375) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const portfolioCards = data.allMarkdownRemark.edges.map(edge => {
    const { summary, title } = edge.node.frontmatter
    const image = edge.node.frontmatter.Image.childImageSharp.fluid

    return (
      <Grid key={title} container item justify="center" xs={12} sm={6} md={4}>
        <PortfolioCard
          fluidImage={image}
          imageTitle={title}
          title={title}
          summary={summary}
        />
      </Grid>
    )
  })

  return (
    <Layout>
      <SEO title="portfolio" />
      <Container>
        <Grid container justify="center" spacing={2}>
          {portfolioCards}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Portfolio
