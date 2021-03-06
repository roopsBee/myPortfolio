import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import BioScene from '../components/bioScene/BioScene'
import BioOverlay from '../components/bioOverlay/BioOverlay'
import PageTransition from '../components/transitions/PageTransition'
import pageTransitionStyles from '../components/transitions/pageTransitionStyles'

const Bio = ({ transitionStatus }) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "bio" }) {
        childMarkdownRemark {
          html
          frontmatter {
            title
            tech
          }
        }
      }
    }
  `)
  const { title, tech } = data.file.childMarkdownRemark.frontmatter
  const bioHTML = data.file.childMarkdownRemark.html

  return (
    <>
      <BioScene />
      <Layout>
        <PageTransition
          transitionStatus={transitionStatus}
          transitionStyles={pageTransitionStyles}
        >
          <BioOverlay title={title} html={bioHTML} tech={tech} />
          <SEO title="Bio" />
        </PageTransition>
      </Layout>
    </>
  )
}

export default Bio
