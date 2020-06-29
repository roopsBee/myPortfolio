import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import FlipCard from '../components/card/flipCard'
import PortfolioCardBack from '../components/card/portfolioCardBack'
import PortfolioCardFront from '../components/card/portfolioCardFront'
import PageTransition from '../components/PageTransition'
import pageTransitionStyles from '../pageTransitionStyles'

const Portfolio = ({ transitionStatus }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              summary
              tech
              title
              description
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
    const { summary, title, description, tech } = edge.node.frontmatter
    const image = edge.node.frontmatter.Image.childImageSharp.fluid

    return (
      <Grid key={title} container item justify="center" xs={12} sm={6} md={4}>
        <FlipCard
          CardFront={
            <PortfolioCardFront
              fluidImage={image}
              imageTitle={title}
              title={title}
              summary={summary}
            />
          }
          CardBack={
            <PortfolioCardBack
              tech={tech}
              description={description}
              title={title}
            />
          }
        />
      </Grid>
    )
  })

  return (
    <Layout>
      <SEO title="portfolio" />
      <PageTransition
        transitionStyles={pageTransitionStyles}
        transitionStatus={transitionStatus}
      >
        <Container>
          <Grid container justify="center" spacing={2}>
            {portfolioCards}
          </Grid>
        </Container>
      </PageTransition>
    </Layout>
  )
}

export default Portfolio
