import { AnchorHTMLAttributes, FC } from 'react';
import { ClassValue } from 'clsx';

import { Button } from './button';
import { cn } from '../lib/utils/cn';

export interface SocialLinkProps {
  href: string;
  icon: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  className?: ClassValue;
}

interface SocialLinksProps {
  items: SocialLinkProps[];
  className?: ClassValue;
}

export const SocialLink: FC<SocialLinkProps> = ({ href, icon, target = "_blank", className }) => {
  return (
    <Button size="icon" className={cn("rounded-full", className)}>
      <a href={href} target={target}>
        <img src={icon} alt="Social icon" className="w-full h-full object-contain" />
      </a>
    </Button>
  );
};

export const SocialLinks: FC<SocialLinksProps> = ({ items, className }) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {items.map((item, index) => (
        <SocialLink key={index} {...item} />
      ))}
    </div>
  );
}