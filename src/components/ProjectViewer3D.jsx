'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const ProjectViewer3D = () => {
  return (
    <div className="h-[500px] w-full">
      <Canvas>
        <OrbitControls />
        {/* 3D project representations would go here */}
      </Canvas>
    </div>
  );
};

export default ProjectViewer3D; 