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
        />
      </StackItem>
    </Stack>
  );
};

export default DashboardPage;
