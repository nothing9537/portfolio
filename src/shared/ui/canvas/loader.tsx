import { FC } from 'react';
import { Html, useProgress } from '@react-three/drei';

export const CanvasLoader: FC = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p className="text-lg text-[#f1f1f1] font-bold mt-4">{progress.toFixed(2)}%</p>
    </Html>
  );
};
