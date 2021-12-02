import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from '../components/catalog/Catalog';
import { dashboard } from '../test/dashboard.test';
import { CardConfig, CardDefinition, DashboardConfig } from '../types';
import { Pages } from './const';
import NotFound from './NotFound';
import DashboardPage from './DashboardPage';
import PageWrapper from './PageWrapper';
import CardEditorModal from '../components/card-editor/CardEditorModal';
import DashboardProvider from '../components/DashboardProvider';
import definitions from '../components/cards/definitions';

const createBasicCardConfig = (cardDefinition: CardDefinition): CardConfig => {
  console.debug('converting cardDefinition', cardDefinition);

  let data = {};
  switch (cardDefinition.id) {
    case 'core.markdown':
      data = {
        title: 'test',
        description: 'some other test',
        markdown: '### big test',
      };
      break;
    default:
      // TODO: Create default for each type
      throw Error(
        `Cannot create card config without defaults, unsupported type ${cardDefinition.id}`,
      );
  }

  return {
    id: 'something-random', // TODO: Gen ID
    type: cardDefinition.id,
    data,
  };
};

const App: React.FC = () => {
  const [config, setConfig] = React.useState<DashboardConfig>(dashboard);
  const [inFlightCardConfig, setInFlightCardConfig] = React.useState<CardConfig | null>(null);

  const updateConfig = React.useCallback(
    (newCardConfig: CardConfig) => {
      console.debug('new card config', newCardConfig);
      console.debug('existing config', config);
    },
    [config],
  );

  return (
    <DashboardProvider definitions={definitions} dashboard={config}>
      <PageWrapper>
        <Routes>
          <Route
            path={Pages.DASHBOARD}
            // TODO make DashboardPage work with DashboardConfig
            element={
              <DashboardPage
                config={config.tabs}
                setConfig={(tabs) => setConfig((c) => ({ ...c, tabs }))}
              />
            }
          />
          <Route
            path={Pages.CATALOG}
            element={
              <Catalog
                onNewCardInstance={(cardDefinition) =>
                  setInFlightCardConfig(createBasicCardConfig(cardDefinition))
                }
              />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {!!inFlightCardConfig && config === null /* TODO: Fix disable */ && (
          <CardEditorModal
            isOpen={!!inFlightCardConfig}
            onClose={() => setInFlightCardConfig(null)}
            onSave={(cardConfig) => updateConfig(cardConfig)}
            config={inFlightCardConfig}
          />
        )}
      </PageWrapper>
    </DashboardProvider>
  );
};

export default App;
