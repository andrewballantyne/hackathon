import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Catalog from '../components/catalog/Catalog';
import { dashboards } from '../test/dashboard.test';
import { CatalogCardDefinition } from '../types';
import { Pages } from './const';
import NotFound from './NotFound';
import DashboardPage from './DashboardPage';
import PageWrapper from './PageWrapper';

const App: React.FC = () => {
  const [config, setConfig] = React.useState(dashboards);

  const addDashboardCard = React.useCallback(
    (cardDefinition: CatalogCardDefinition) => {
      // update the config to take a definition and add it to the dashboard... maybe a modal?
      // TODO: Implement
      console.debug('new definition', cardDefinition);
      console.debug('existing config', config);
    },
    [config],
  );

  return (
    <PageWrapper>
      <Routes>
        <Route
          path={Pages.DASHBOARD}
          element={<DashboardPage config={config} setConfig={setConfig} />}
        />
        <Route path={Pages.CATALOG} element={<Catalog onNewCardInstance={addDashboardCard} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </PageWrapper>
  );
};

export default App;
