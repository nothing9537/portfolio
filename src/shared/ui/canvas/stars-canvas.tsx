import { FC, Suspense, useRef } from 'react';
import { PointMaterial, Points } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

import * as random from 'maath/random';
import { VisibilityHandler } from '@/shared/lib/components/visibility-handler';

const Stars_Model: FC = () => {
  const ref: any = useRef(null);

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere as Float32Array}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          size={0.002}
        />
      </Points>
    </group>
  );
};

export const Stars_Canvas: FC = () => {
  return (
    <VisibilityHandler className="absolute w-full h-full inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
      >
        <Suspense fallback={null}>
          <Stars_Model />
        </Suspense>
      </Canvas>
    </VisibilityHandler>
  );
}