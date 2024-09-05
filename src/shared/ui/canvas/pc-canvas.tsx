import { FC, Suspense } from 'react';
import { isMobile } from 'react-device-detect';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import { CanvasLoader } from '../loaders';

interface PCCanvasProps {
  isVisible: boolean;
}

const PCModel: FC<PCCanvasProps> = ({ isVisible }) => {
  const pc = useGLTF('/desktop_pc/scene.gltf');

  const scale = isMobile ? .8 : 1.2;
  const position = isMobile ? [-1, -2, -1] : [0, -2.5, -1.5];

  if (!isVisible) {
    pc.scene.clear();
  }

  return (
    <mesh>
      <hemisphereLight intensity={1.25} groundColor="black" />
      {/* <spotLight intensity={3} /> */}
      <pointLight intensity={2} />
      <ambientLight intensity={.5} />
      <primitive
        object={pc.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -.1]}
      />
    </mesh>
  );
};

export const PC_Canvas: FC<PCCanvasProps> = ({ isVisible }) => {
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
        <PCModel isVisible={isVisible} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};