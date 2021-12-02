import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from '../components/catalog/Catalog';
import { dashboard } from '../test/dashboard.test';
import { HackathonPage } from './const';
import NotFound from './NotFound';
import DashboardPage from './DashboardPage';
import PageWrapper from './PageWrapper';
import DashboardProvider from '../components/DashboardProvider';
import definitions from '../components/cards/definitions';

const App: React.FC = () => {
  return (
    <DashboardProvider definitions={definitions} dashboard={dashboard}>
      <PageWrapper>
        <Routes>
          <Route path={`${HackathonPage.DASHBOARD}/*`} element={<DashboardPage />} />
          <Route path={HackathonPage.CATALOG} element={<Catalog />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </PageWrapper>
    </DashboardProvider>
  );
};

export default App;
