import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Canvas } from 'react-three-fiber'
import Camera from './Camera'
import Cube from './Cube'
import { useState } from 'react'
import { Text, Stars, Sky } from 'drei'
import { useGesture } from 'react-use-gesture'

const useStyles = makeStyles({
  canvas: {
    position: 'absolute !important',
  },
})

const BioScene = () => {
  const [scroll, setScroll] = useState(0)
  const classes = useStyles()

  const handleWheel = state => {
    const newScroll = Math.min(Math.max(scroll + state.delta[1] / 100, 0), 10)
    setScroll(newScroll)
  }

  const handleDrag = state => {
    const newScroll = Math.min(Math.max(scroll - state.delta[1] / 100, 0), 10)
    setScroll(newScroll)
  }

  const bind = useGesture({
    onDrag: state => handleDrag(state),
    onWheel: state => handleWheel(state),
  })

  return (
    <>
      <Canvas {...bind()} className={classes.canvas}>
        <ambientLight intensity={0.7} />
        <Camera scroll={scroll} />
        <Stars radius={10} factor={1} />
        <Sky material-uniforms-rayleigh-value={1} sunPosition={[0, 0.1, -3]} />
        <Text color="blue" fontSize={0.5} maxWidth={10} position={[0, 0, 1]}>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </Text>
        <Text color="blue" fontSize={0.5} maxWidth={10} position={[0, -5, 1]}>
          Curabitur dignissim sem non augue tincidunt accumsan. Ut vestibulum
          pellentesque volutpat. Aliquam erat volutpat. Sed tincidunt rhoncus
          purus, non iaculis lectus bibendum quis. Integer in efficitur est. Sed
          quis eros quam.
        </Text>
        <Text color="blue" fontSize={0.5} maxWidth={10} position={[0, -10, 1]}>
          Fusce ac ligula tempus, imperdiet leo sed, rutrum ligula. Curabitur
          commodo suscipit nisl sed feugiat. Donec luctus dapibus est, in
          ultrices lacus scelerisque sit amet. Phasellus rhoncus scelerisque
          ipsum, eget tincidunt mauris hendrerit at.
        </Text>
        <Cube />
        <Cube position={[0, -5, 0]} />
        <Cube position={[0, -10, 0]} />
      </Canvas>
    </>
  )
}

export default BioScene
