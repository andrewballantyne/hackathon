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
import Dashbboard, { DashboardAPI } from '../components/dashboard/Dashbboard';
import { cardDefinitions } from '../test/dashboard.test';
import { DashboardTabConfig } from '../types';

type DashboardPageProps = {
  config: DashboardTabConfig[];
  setConfig: (tabs: DashboardTabConfig[]) => void;
};

const DashboardPage: React.FC<DashboardPageProps> = ({ config, setConfig }) => {
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
        <Dashbboard
          ref={dashboardProviderAPI}
          readonly={readonly}
          cardDefinitions={cardDefinitions}
          tabs={config}
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
