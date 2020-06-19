import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

const OrbitLight = ({ speed, rotation, position, ...props }) => {
  const group = useRef()

  useFrame(() => {
    group.current.rotation.y += speed
  })

  return (
    <>
      <group ref={group} position={[0, 0, 0]} rotation={rotation}>
        <spotLight
          penumbra={1}
          position={position}
          decay={5}
          angle={Math.PI / 4}
        />
      </group>
    </>
  )
}

export default OrbitLight
