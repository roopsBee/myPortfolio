import React from 'react'
import { Paper, Container } from '@material-ui/core'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import StarIcon from '@material-ui/icons/Star'
import InfoIcon from '@material-ui/icons/Info'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Done from '@material-ui/icons/Done'
import PortfolioCard from '../components/portfolioCard'

const useStyles = makeStyles(theme => ({}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Grid container justify="center" spacing={2}>
          <Grid container item justify="center" xs={12} sm={6} md={4}>
            <PortfolioCard />
          </Grid>
          <Grid container item justify="center" xs={12} sm={6} md={4}>
            <PortfolioCard />
          </Grid>
          <Grid container item justify="center" xs={12} sm={6} md={4}>
            <PortfolioCard />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
