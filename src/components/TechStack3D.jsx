'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const technologies = [
  { name: 'Python', color: '#3776AB', category: 'language' },
  { name: 'TensorFlow', color: '#FF6F00', category: 'ai' },
  { name: 'React', color: '#61DAFB', category: 'frontend' },
  { name: 'OpenCV', color: '#5C3EE8', category: 'ai' },
  { name: 'Node.js', color: '#339933', category: 'backend' },
  { name: 'MongoDB', color: '#47A248', category: 'database' },
  { name: 'C++', color: '#00599C', category: 'language' },
  { name: 'PyTorch', color: '#EE4C2C', category: 'ai' },
  { name: 'Docker', color: '#2496ED', category: 'devops' }
];

const TechItem = ({ name, color, index, total }) => {
  const meshRef = useRef();
  const radius = 8;
  const angle = (index / total) * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(time + index) * 0.5;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float
      speed={1.5} 
      rotationIntensity={1} 
      floatIntensity={2}
      position={[x, 0, z]}
    >
      <mesh ref={meshRef}>
        <Text
          color={color}
          fontSize={0.8}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          font="/fonts/Inter-Bold.woff"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </mesh>
    </Float>
  );
};

const TechStack = () => {
  return (
    <section className="h-[600px] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
        {technologies.map((tech, i) => (
          <TechItem
            key={tech.name}
            {...tech}
            index={i}
            total={technologies.length}
          />
        ))}
      </Canvas>
    </section>
  );
};

export default TechStack; 