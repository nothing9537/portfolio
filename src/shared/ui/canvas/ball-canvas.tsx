import { FC, Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import { BaseCanvasProps } from '@/shared/lib/types';

import { CanvasLoader } from '../loaders';

interface BallCanvasProps extends BaseCanvasProps {
  img: string;
}

const BallModel: FC<BallCanvasProps> = ({ img, isVisible }) => {
  const [decal] = useTexture([img]);

  if (!isVisible) {
    decal.dispose();
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff"
          flatShading
        />
        <Decal
          rotation={[2 * Math.PI, 0, 6.25]}
          position={[0, 0, 1]}
          scale={.85}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

export const Ball_Canvas: FC<BallCanvasProps> = ({ img, isVisible }) => {
  return (
    <div className="relative w-full h-full">
      <Canvas
        dpr={[1, 2]}
        frameloop='always'
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
          />
          <BallModel img={img} isVisible={isVisible} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}