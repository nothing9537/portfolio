import { FC } from 'react';

import { Navbar } from '@/widgets/navbar';
import { Hero } from '@/widgets/hero';
import { MainLayout } from '@/shared/layouts/main-layout';

export const App: FC = () => {
  return (
    <MainLayout
      navbar={
        <>
          <Navbar />
          <Hero />
        </>
      }
      body={<div>Body</div>}
      footer={<div>Footer</div>}
    />
  );
};
