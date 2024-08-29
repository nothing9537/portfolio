import { FC, HTMLAttributes } from 'react'

import { logo } from '../assets'

type LogoProps = HTMLAttributes<HTMLImageElement>;

export const Logo: FC<LogoProps> = (...props) => {
  return (
    <img
      src={logo}
      alt="Logo Image"
      className="w-16 h-16 object-contain"
      {...props}
    />
  );
};
