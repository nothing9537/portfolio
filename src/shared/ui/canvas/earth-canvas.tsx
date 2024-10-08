import { FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';

import { BaseCanvasProps } from '@/shared/lib/types';

import { CanvasLoader } from '../loaders';

const EarthModel: FC<BaseCanvasProps> = ({ isVisible }) => {
  const earth = useGLTF('/planet/scene.gltf');

  if (!isVisible) {
    earth.scene.clear();
  }

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

export const Earth_Canvas: FC<BaseCanvasProps> = ({ isVisible }) => {
  return (
    <Canvas
      shadows
      frameloop="always"
      gl={{ preserveDrawingBuffer: false }}
      camera={{ fov: 45, near: .5, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Preload all />
        <EarthModel isVisible={isVisible} />
      </Suspense>
    </Canvas>
  );
};
