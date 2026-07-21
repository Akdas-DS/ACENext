'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export default function Hero3D() {
  const group = useRef<THREE.Group>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FAFAF8" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#F1FEC8" />
      
      <Environment preset="city" />

      <group ref={group}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[-2, 1, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
            <octahedronGeometry args={[1.5, 0]} />
            <MeshTransmissionMaterial
              ref={materialRef}
              background={new THREE.Color('#0C0C0E')}
              transmission={0.9}
              thickness={1.5}
              roughness={0.1}
              ior={1.5}
              chromaticAberration={0.03}
              anisotropy={0.3}
              color="#D4C5B2"
              resolution={128}
              samples={3}
            />
          </mesh>
        </Float>

        <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
          <mesh position={[2, -0.5, 1]} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
            <icosahedronGeometry args={[1.2, 0]} />
            <MeshTransmissionMaterial
              transmission={0.8}
              thickness={2}
              roughness={0.15}
              ior={1.4}
              color="#A8A29E"
              resolution={128}
              samples={3}
            />
          </mesh>
        </Float>

        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={[0, -2, -2]} rotation={[Math.PI / 6, 0, Math.PI / 4]}>
            <torusGeometry args={[2, 0.4, 16, 100]} />
            <MeshTransmissionMaterial
              transmission={0.95}
              thickness={1}
              roughness={0.05}
              ior={1.6}
              color="#2D4A3E"
              resolution={128}
              samples={3}
            />
          </mesh>
        </Float>
      </group>

      <ContactShadows
        position={[0, -3.5, 0]}
        opacity={0.4}
        scale={20}
        blur={2}
        far={10}
        color="#000000"
        resolution={256}
        frames={1}
      />
    </>
  );
}
