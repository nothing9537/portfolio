import { FC } from 'react';

import { Navbar } from '@/widgets/navbar';
import { Hero } from '@/widgets/hero';
import { About } from '@/widgets/about';
import { Experience } from '@/widgets/experience';

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
      body={
        <>
          <About />
          <Experience />
        </>
      }
      footer={<div>Footer</div>}
    />
  );
};
