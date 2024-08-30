import { FC } from 'react';

import { Navbar } from '@/widgets/navbar';
import { Hero } from '@/widgets/hero';
import { About } from '@/widgets/about';
import { Experience } from '@/widgets/experience';
import { Technologies } from '@/widgets/technologies';
import { Projects } from '@/widgets/projects';
import { Feedback } from '@/widgets/feedback';

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
          <Technologies />
          <Projects />
          <Feedback />
        </>
      }
      footer={<></>}
    />
  );
};
