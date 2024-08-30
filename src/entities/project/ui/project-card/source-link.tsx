import { FC } from 'react';

import { cn } from '@/shared/lib/utils/cn';

interface SourceLinkProps {
  image: string;
  source: string;
  className?: string;
}

export const SourceLink: FC<SourceLinkProps> = ({ image, source, className }) => {
  return (
    <a
      href={source}
      className={cn("black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer select-none", className)}
      target="_blank"
    >
      <img src={image} alt="Github Icon" className="w-1/2 h-1/2 object-contain" />
    </a>
  );
};
