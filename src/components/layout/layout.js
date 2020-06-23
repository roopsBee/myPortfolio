import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '@material-ui/styles'

import Header from './header'
import theme from '../../themes/theme'
import Footer from './footer'
import './layout.css'
import { Toolbar } from '@material-ui/core'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div style={{ minHeight: '100vh', backgroundColor: 'black' }}>
          <ThemeProvider theme={theme}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Toolbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
