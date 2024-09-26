import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

export const SodaZeroMain = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/model/soda-zero.glb');
  return (
    <group ref={ref} {...props} dispose={null} scale={10} position={[0, -40, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.aiStandardSurface4SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.aiStandardSurface2SG} />
        <mesh geometry={nodes.Object_4001.geometry} material={materials['Material.005']} />
      </group>
    </group>
  );
});

useGLTF.preload('/model/soda-zero.glb');
