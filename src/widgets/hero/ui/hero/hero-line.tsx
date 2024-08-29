import { FC } from 'react';

export const HeroLine: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <div className="w-4 h-4 rounded-full bg-[#915eff]" />
      <div className="w-1 sm:h-80 h-40 violet-gradient" />
    </div>
  )
}
