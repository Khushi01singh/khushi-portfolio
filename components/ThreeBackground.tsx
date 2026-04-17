'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 120

function Particles() {
  const pointsRef = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5
      velocities[i * 3] = (Math.random() - 0.5) * 0.006
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.006
      velocities[i * 3 + 2] = 0
    }
    return { positions, velocities }
  }, [])

  useFrame(({ mouse }) => {
    if (!pointsRef.current) return
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array
    mouseRef.current = { x: mouse.x * 10, y: mouse.y * 10 }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3, iy = i * 3 + 1

      pos[ix] += velocities[ix]
      pos[iy] += velocities[iy]

      // Mouse repulsion
      const dx = mouseRef.current.x - pos[ix]
      const dy = mouseRef.current.y - pos[iy]
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 2.5) {
        pos[ix] -= dx * 0.012
        pos[iy] -= dy * 0.012
      }

      // Wrap
      if (pos[ix] > 10) pos[ix] = -10
      if (pos[ix] < -10) pos[ix] = 10
      if (pos[iy] > 10) pos[iy] = -10
      if (pos[iy] < -10) pos[iy] = 10
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#6c63ff"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingOrb({ position, color, size }: {
  position: [number, number, number]
  color: string
  size: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.5 + position[0]) * 0.3
    meshRef.current.rotation.x = clock.elapsedTime * 0.2
    meshRef.current.rotation.z = clock.elapsedTime * 0.15
  })

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#6c63ff" />
        <Particles />
        <FloatingOrb position={[4, 2, -2]} color="#6c63ff" size={1.2} />
        <FloatingOrb position={[-5, -1, -3]} color="#00f5d4" size={0.9} />
        <FloatingOrb position={[2, -3, -1]} color="#ff6b9d" size={0.7} />
      </Canvas>
    </div>
  )
}
