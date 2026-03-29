'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Suspense } from 'react'

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#C8860A" />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1, 64, 64]} scale={2}>
          <MeshDistortMaterial
            color="#C8860A"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.4}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-left">
        <p className="text-sm uppercase tracking-widest text-muted-text mb-6">
          WEDDING · BIRTHDAY · BUSINESS · EVENTS<br />
          Miyapur, Hyderabad
        </p>
        
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-balance">
          Every Frame,<br />
          <span className="text-accent">Illuminated.</span>
        </h1>
        
        <p className="text-xl text-muted-text max-w-2xl mb-8">
          We turn your most meaningful moments into photographs that stay with you forever.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="mailto:hello@theillustudio.com"
            className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition transform hover:scale-105"
          >
            Book a Session
          </a>
          <a 
            href="#gallery"
            className="px-8 py-4 border border-primary-text/20 rounded-full font-medium hover:bg-surface transition"
          >
            View Our Work ↓
          </a>
        </div>
      </div>
    </section>
  )
}
