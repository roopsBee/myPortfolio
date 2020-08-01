import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import FlipCard from '../components/card/flipCard'
import PortfolioCardBack from '../components/card/portfolioCardBack'
import PortfolioCardFront from '../components/card/portfolioCardFront'
import PageTransition from '../components/transitions/PageTransition'
import pageTransitionStyles from '../components/transitions/pageTransitionStyles'

const useStyles = makeStyles({
  container: {
    paddingTop: '2vh',
  },
})

const Portfolio = ({ transitionStatus }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                summary
                tech
                title
                description
                url
                Image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const portfolioCards = data.allFile.edges.map(edge => {
    const {
      summary,
      title,
      description,
      tech,
      Image: imgData,
    } = edge.node.childMarkdownRemark.frontmatter
    const image = imgData.childImageSharp.fluid

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
        <Container className={classes.container}>
          <Grid container justify="center" spacing={2}>
            {portfolioCards}
          </Grid>
        </Container>
      </PageTransition>
    </Layout>
  )
}

export default Portfolio
