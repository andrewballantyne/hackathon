import {
  Button,
  Stack,
  StackItem,
  Switch,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import * as React from 'react';
import Dashboard, { DashboardAPI } from '../components/dashboard/Dashboard';
import { cardDefinitions } from '../test/dashboard.test';
import DashboardContext from '../utils/DashboardContext';
import { HackathonPage } from './const';

type DashboardPageProps = {};

const DashboardPage: React.FC<DashboardPageProps> = () => {
  const { dashboard: config } = React.useContext(DashboardContext);
  const [readonly, setReadonly] = React.useState(false);

  const dashboardProviderAPI = React.useRef<DashboardAPI>(null);

  return (
    <Stack style={{ flexGrow: 1 }}>
      <StackItem>
        <Toolbar>
          <ToolbarContent>
            <ToolbarGroup alignment={{ default: 'alignRight' }}>
              <ToolbarItem>
                <Button onClick={() => dashboardProviderAPI.current?.fullscreenToggle()}>
                  Fullscreen
                </Button>
              </ToolbarItem>
              <ToolbarItem>
                <Switch
                  label="Readonly"
                  checked={readonly}
                  onChange={() => setReadonly((v) => !v)}
                />
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarContent>
        </Toolbar>
      </StackItem>
      <StackItem isFilled style={{ display: 'flex', overflow: 'hidden' }}>
        <Dashboard
          ref={dashboardProviderAPI}
          // basePath={`${HackathonPage.DASHBOARD}/`}
          readonly={readonly}
          cardDefinitions={cardDefinitions}
          tabs={config.tabs}
          // onCardChange={(id, config) => {
          //   setConfig((c) =>
          //     c.reduce((acc, d) => {
          //       if (d.id === id) {
          //         const i = d.cards.findIndex((c) => c.id === config.id);
          //         const cards = [...d.cards.slice(0, i), config, ...d.cards.slice(i + 1)];
          //         acc.push({
          //           ...d,
          //           cards,
          //         });
          //       } else {
          //         acc.push(d);
          //       }
          //       return acc;
          //     }, [] as DashboardTabConfig[]),
          //   );
          // }}
          // onLayoutChange={(id, layout) => {
          //   setConfig((c) =>
          //     c.reduce((acc, d) => {
          //       if (d.id === id) {
          //         acc.push({
          //           ...d,
          //           layout,
          //         });
          //       } else {
          //         acc.push(d);
          //       }
          //       return acc;
          //     }, [] as DashboardTabConfig[]),
          //   );
          // }}
        />
      </StackItem>
    </Stack>
  );
};

export default DashboardPage;
