import React, { useEffect } from 'react'
import useResponsiveValue from '../../hooks/useResponsiveValue'
import { useThree } from 'react-three-fiber'
import { useMemo } from 'react'
import { PerspectiveCamera } from 'drei'

const Camera = ({ ...props }) => {
  const { gl, camera } = useThree()

  const responsiveZoom = useResponsiveValue(0.4, 0.4, 0.5, 0.6, 0.7)

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    gl.setPixelRatio(window.devicePixelRatio)
    gl.setSize(window.innerWidth, window.innerHeight, false)
    camera.updateProjectionMatrix()
  }

  useMemo(() => {
    camera.aspect = window.innerWidth / window.innerHeight
    gl.setPixelRatio(window.devicePixelRatio)
    gl.setSize(window.innerWidth, window.innerHeight, false)
    camera.updateProjectionMatrix()
  }, [camera, gl])

  useEffect(() => {
    window.addEventListener('resize', onWindowResize, false)
    return function cleanup() {
      window.removeEventListener('resize', onWindowResize)
    } // eslint-disable-next-line
  }, [])

  return (
    <>
      <PerspectiveCamera
        {...props}
        makeDefault
        fov={30}
        zoom={responsiveZoom}
        position={[0, 0, 10]}
        rotation={[0, 0, 0]}
      />
    </>
  )
}

export default Camera
