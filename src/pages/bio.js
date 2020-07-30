import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import BioScene from '../components/bioScene/BioScene'

const Bio = () => {
  return (
    <>
      <BioScene />
      <Layout>
        <SEO title="Bio" />
      </Layout>
    </>
  )
}

export default Bio
