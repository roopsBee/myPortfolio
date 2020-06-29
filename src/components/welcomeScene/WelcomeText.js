import React, { useRef, useEffect } from 'react'
import { a, useSpring } from 'react-spring/three'
import * as THREE from 'three'
import { useFrame, useLoader } from 'react-three-fiber'
import { useMemo } from 'react'

const WelcomeText = ({ toggle, setSceneActive }) => {
  const text = useRef()
  const rText = useRef()
  const font = useLoader(THREE.FontLoader, '/Roboto.json')

  useEffect(() => {
    setSceneActive(true)
  }, [])

  const textConfig = useMemo(
    () => ({
      font,
      size: 1,
      height: 0.1,
      curveSegments: 15,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 10,
    }),
    [font]
  )

  const { opacity, opacity2 } = useSpring({
    from: { opacity: 0 },
    opacity: toggle ? 0 : 1,
    opacity2: toggle ? 1 : 0,
    config: { mass: 5, tension: 200, friction: 50, precision: 0.0001 },
  })

  useFrame(({ clock }) => {
    text.current.position.z = 5 + Math.sin(clock.getElapsedTime() * 2) / 2
    rText.current.position.z = -5 - Math.sin(clock.getElapsedTime() * 2) / 2
  })

  return (
    <group>
      <mesh ref={text} position={[-3.3, 1, 0]}>
        <textBufferGeometry attach="geometry" args={['WELCOME', textConfig]} />
        <a.meshPhongMaterial
          transparent
          opacity={opacity}
          attachArray="material"
          color="black"
        />
        <a.meshPhongMaterial
          transparent
          opacity={opacity}
          attachArray="material"
          color={0xf50057}
        />
      </mesh>
      <mesh ref={rText} position={[2.5, -2, 0]} rotation-y={Math.PI}>
        <textBufferGeometry
          attach="geometry"
          args={['R', { ...textConfig, size: 6, bevelSize: 0.04, height: 0.2 }]}
        />
        <a.meshPhongMaterial
          transparent
          opacity={opacity2}
          attachArray="material"
          color="black"
        />
        <a.meshPhongMaterial
          transparent
          opacity={opacity2}
          attachArray="material"
          color={0xf50057}
        />
      </mesh>
    </group>
  )
}

export default WelcomeText
