import { FC, Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import { CanvasLoader } from './loader';

interface BallCanvasProps {
  img: string;
}

const Ball: FC<BallCanvasProps> = ({ img }) => {
  const [decal] = useTexture([img]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff"
          polygonOffset
          polygonOffsetFactor={-5}
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

export const Ball_Canvas: FC<BallCanvasProps> = ({ img }) => {
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
          <Ball img={img} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}