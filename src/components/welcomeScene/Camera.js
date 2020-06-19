import React, { useRef, useEffect } from 'react'
import { a, useSpring } from 'react-spring/three'
import useResponsiveValue from '../../hooks/useResponsiveValue'
import { useThree } from 'react-three-fiber'
import { useMemo } from 'react'
import { PerspectiveCamera } from 'drei'

const Camera = ({ toggle, ...props }) => {
  const group = useRef()
  const { gl, camera } = useThree()

  const responsiveZoom = useResponsiveValue(0.3, 0.5, 0.6, 0.7, 0.7)

  const { angle } = useSpring({
    angle: toggle ? -Math.PI : 0,
    config: { mass: 5, tension: 200, friction: 50, precision: 0.0001 },
  })

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    gl.setPixelRatio(window.devicePixelRatio)
    gl.setSize(window.innerWidth, window.innerHeight)
    camera.updateProjectionMatrix()
  }

  useMemo(() => {
    gl.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    gl.setPixelRatio(window.devicePixelRatio)
    camera.updateProjectionMatrix()
  }, [camera, gl])

  useEffect(() => {
    window.addEventListener('resize', onWindowResize, false)
    return function cleanup() {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [])

  return (
    <a.group ref={group} rotation-y={angle}>
      <PerspectiveCamera
        {...props}
        makeDefault
        zoom={responsiveZoom}
        position={[0, 0, 10]}
        rotation={[Math.PI / 20, 0, 0]}
      />
    </a.group>
  )
}

export default Camera
