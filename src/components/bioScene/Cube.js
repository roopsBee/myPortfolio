import React from 'react'

const Cube = ({ ...props }) => {
  return (
    <mesh {...props}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  )
}

export default Cube
