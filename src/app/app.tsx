import { FC } from 'react';

import { Navbar } from '@/widgets/navbar';
import { MainLayout } from '@/shared/layouts/main-layout';

export const App: FC = () => {
  return (
    <MainLayout
      navbar={
        <>
          <Navbar />
        </>
      }
      body={<div>Body</div>}
      footer={<div>Footer</div>}
    />
  );
};
