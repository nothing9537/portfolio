import { FC } from 'react';
import { ClassValue } from 'clsx';
import { Loader } from 'lucide-react';

import { cn } from '@/shared/lib/utils/cn';

interface WidgetLoaderProps {
  className?: ClassValue;
}

export const WidgetLoader: FC<WidgetLoaderProps> = ({ className }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader className={cn("h-40 w-40 animate-spin", className)} />
    </div>
  );
};
