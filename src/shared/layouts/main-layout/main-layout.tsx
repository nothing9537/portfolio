import { cn } from '@/shared/lib/utils/cn';
import { FC, ReactNode } from 'react'

interface MainLayoutProps {
  navbar: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ navbar, footer, body }) => {
  return (
    <main className="relative z-0 bg-primary flex flex-col">
      <nav className={cn("w-full h-24")}>
        {navbar}
      </nav>
      {body}
      <footer className="relative z-0 pb-2">
        {footer}
      </footer>
    </main>
  );
};
