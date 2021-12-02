import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from '../components/catalog/Catalog';
import { dashboard } from '../test/dashboard.test';
import { Pages } from './const';
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
          <Route
            path={Pages.DASHBOARD}
            // TODO make DashboardPage work with DashboardConfig
            element={<DashboardPage />}
          />
          <Route path={Pages.CATALOG} element={<Catalog />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </PageWrapper>
    </DashboardProvider>
  );
};

export default App;
