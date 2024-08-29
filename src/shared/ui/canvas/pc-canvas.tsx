import { FC, Suspense } from 'react';
import { isMobile } from 'react-device-detect';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { CanvasLoader } from './loader';

export const PC: FC = () => {
  const pc = useGLTF('/desktop_pc/scene.gltf');

  const scale = isMobile ? 0.5 : 0.75;
  const position = isMobile ? [-1, -2, -1] : [0, -3.25, -1.5];

  return (
    <mesh>
      <hemisphereLight intensity={1.75} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
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
    <div className="relative w-full h-full">
      <Canvas
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="absolute"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <PC />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}