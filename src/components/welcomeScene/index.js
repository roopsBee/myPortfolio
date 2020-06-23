import { Canvas } from 'react-three-fiber'
import { makeStyles } from '@material-ui/core'
import Loadable from 'react-loadable'
import React, { Suspense, useState } from 'react'
import OrbitLight from './OrbitLight'
import Overlay from './Overlay'

const WelcomeText = Loadable({
  loader: () => import('./WelcomeText'),
  loading: () => null,
})

const Camera = Loadable({
  loader: () => import('./Camera'),
  loading: () => null,
})

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    position: 'absolute !important',
  },
})

const Index = () => {
  const classes = useStyles()
  const [toggle, setToggle] = useState()

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <Overlay handleClick={handleClick} toggle={toggle} />
      <Canvas className={classes.root}>
        <ambientLight intensity={0.3} />
        <OrbitLight position={[-24, 2, 0]} speed={0.02} rotation={[0, 0, 0]} />
        <Suspense fallback={null}>
          <WelcomeText toggle={toggle} />
        </Suspense>
        <Camera toggle={toggle} />
      </Canvas>
    </>
  )
}

export default Index
