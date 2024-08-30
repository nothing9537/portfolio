import { FC, ReactNode, useState } from 'react';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export const Tooltip: FC<TooltipProps> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg">
          {text}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45 -bottom-[6px]"></div>
        </div>
      )}
    </div>
  );
};
