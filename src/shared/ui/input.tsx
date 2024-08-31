import { FC, forwardRef, InputHTMLAttributes } from 'react'
import { ControllerFieldState } from 'react-hook-form';

import { cn } from '../lib/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  fieldState?: ControllerFieldState;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, fieldState, ...props }, ref) => {
    return (
      <input
        className={cn("bg-tertiary py-4 px-6 placeholder:text-secondary ring-offset-background text-white rounded-lg outline-none border-none font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);
