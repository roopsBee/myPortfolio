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
import BioScene from '../components/bioScene/BioScene'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: '2vh',
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
}))

const Portfolio = ({ transitionStatus }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        edges {
          node {
            childMarkdownRemark {
              html
              frontmatter {
                title
                url
                tech
                summary
                codeUrl
                alt
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
      title,
      url,
      tech,
      summary,
      codeUrl,
      alt,
      Image: imgData,
    } = edge.node.childMarkdownRemark.frontmatter
    const image = imgData.childImageSharp.fluid
    const descriptionHTML = edge.node.childMarkdownRemark.html

    return (
      <Grid key={title} container item justify="center" xs={12} sm={6} md={4}>
        <FlipCard
          CardFront={
            <PortfolioCardFront
              fluidImage={image}
              imageAlt={alt}
              imageTitle={title}
              title={title}
              summary={summary}
              url={url}
              codeUrl={codeUrl}
            />
          }
          CardBack={
            <PortfolioCardBack
              tech={tech}
              descriptionHTML={descriptionHTML}
              title={title}
              url={url}
              codeUrl={codeUrl}
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
        <BioScene />
      </PageTransition>
    </Layout>
  )
}

export default Portfolio
