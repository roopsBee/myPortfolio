import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
// import BioScene from '../components/bioScene/BioScene'
import BioOverlay from '../components/bioOverlay/BioOverlay'

const Bio = () => {
  return (
    <>
      {/* <BioScene /> */}
      <Layout>
        <BioOverlay />
        <SEO title="Bio" />
      </Layout>
    </>
  )
}

export default Bio
