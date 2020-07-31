import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Canvas } from 'react-three-fiber'
import Camera from './Camera'
import { Stars } from 'drei'

const useStyles = makeStyles({
  canvas: {
    position: 'absolute !important',
  },
})

const BioScene = () => {
  const classes = useStyles()
  console.log('outer', window.outerHeight, 'inner', window.innerHeight)
  return (
    <Canvas className={classes.canvas}>
      <ambientLight intensity={0.7} />
      <Camera />
      <Stars radius={10} factor={1} />
    </Canvas>
  )
}

export default BioScene
