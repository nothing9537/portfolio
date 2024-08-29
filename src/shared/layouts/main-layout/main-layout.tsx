import { FC, ReactNode } from 'react'

interface MainLayoutProps {
  navbar: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ navbar, footer, body }) => {
  return (
    <main className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        {navbar}
      </div>
      {body}
      <footer className="relative z-0">
        {footer}
      </footer>
    </main>
  );
};