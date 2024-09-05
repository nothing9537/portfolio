import { FC, lazy } from 'react';

import { Navbar } from '@/widgets/navbar';
import { Hero } from '@/widgets/hero';

const LazyAbout = lazy(() => import('@/widgets/about'));
const LazyExperience = lazy(() => import('@/widgets/experience'));
const LazyTechnologies = lazy(() => import('@/widgets/technologies'));
const LazyProjects = lazy(() => import('@/widgets/projects'));
const LazyFeedback = lazy(() => import('@/widgets/feedback'));
const LazyContacts = lazy(() => import('@/widgets/contacts'));

import { MainLayout } from '@/shared/layouts/main-layout';
import { Stars_Canvas } from '@/shared/ui/canvas';
import { SectionSwitch } from '@/shared/ui/section-switch';
import { LazyLoad } from '@/shared/lib/components/lazy-load';
import { WidgetLoader } from '@/shared/ui/loaders/widget-loader';

export const App: FC = () => {
  return (
    <MainLayout
      navbar={<Navbar />}
      body={
        <div className="flex flex-col gap-12">
          <Hero />

          <SectionSwitch toSection="about" />

          <LazyLoad loader={<WidgetLoader />} id="about">
            <LazyAbout />
          </LazyLoad>

          <SectionSwitch toSection="work" />

          <LazyLoad loader={<WidgetLoader />} id="work">
            <LazyExperience />
          </LazyLoad>

          <SectionSwitch toSection="skills" />

          <LazyLoad loader={<WidgetLoader />} id="skills">
            <LazyTechnologies />
          </LazyLoad>

          <SectionSwitch toSection="projects" />

          <LazyLoad loader={<WidgetLoader />} id="projects">
            <LazyProjects />
          </LazyLoad>

          <SectionSwitch toSection="feedback" />

          <LazyLoad loader={<WidgetLoader />} id="feedback">
            <LazyFeedback />
          </LazyLoad>

          <SectionSwitch toSection="contact" />
        </div>
      }
      footer={
        <LazyLoad loader={<WidgetLoader />} id="contact">
          <LazyContacts />
          <Stars_Canvas />
        </LazyLoad>
      }
    />
  );
};
