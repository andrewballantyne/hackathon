import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Catalog from '../components/catalog/Catalog';
import { dashboard } from '../test/dashboard.test';
import { HackathonPage } from './const';
import NotFound from './NotFound';
import DashboardPage from './DashboardPage';
import PageWrapper from './PageWrapper';
import DashboardProvider from '../components/DashboardProvider';
import definitions from '../components/cards/definitions';

const App: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DashboardProvider definitions={definitions} dashboard={dashboard}>
      <PageWrapper>
        <Routes>
          <Route path={`${HackathonPage.DASHBOARD}/*`} element={<DashboardPage />} />
          <Route
            path={HackathonPage.CATALOG}
            element={
              <Catalog
                onCardAdded={(config, tabId) => navigate(`${HackathonPage.DASHBOARD}/${tabId}`)}
              />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </PageWrapper>
    </DashboardProvider>
  );
};

export default App;
