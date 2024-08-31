import { FC, Suspense } from 'react';
import { isMobile } from 'react-device-detect';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import { CanvasLoader } from './loader';

const PCModel: FC = () => {
  const pc = useGLTF('/desktop_pc/scene.gltf');

  const scale = isMobile ? 0.5 : 0.75;
  const position = isMobile ? [-1, -2, -1] : [0, -3.25, -1.5];

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={pc.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -.1]}
      />
    </mesh>
  );
};

export const PC_Canvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <PCModel />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}