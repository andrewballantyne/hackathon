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
import TabEditorModal from '../components/tab-editor/TabEditorModal';
import { HackathonPage } from './const';

type DashboardPageProps = {};

const DashboardPage: React.FC<DashboardPageProps> = () => {
  const [tabEditorOpen, setTabEditorOpen] = React.useState(false);
  const [readonly, setReadonly] = React.useState(false);

  const dashboardProviderAPI = React.useRef<DashboardAPI>(null);

  return (
    <>
      <Stack style={{ flexGrow: 1 }}>
        <StackItem>
          <Toolbar>
            <ToolbarContent>
              <ToolbarGroup alignment={{ default: 'alignRight' }}>
                <ToolbarItem>
                  <Button onClick={() => setTabEditorOpen(true)}>Configure Tabs</Button>
                </ToolbarItem>
                <ToolbarItem>
                  <Button onClick={() => dashboardProviderAPI.current?.fullscreenToggle()}>
                    Fullscreen
                  </Button>
                </ToolbarItem>
                <ToolbarItem>
                  <Switch
                    label="Editable"
                    checked={!readonly}
                    onChange={() => setReadonly((v) => !v)}
                  />
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarContent>
          </Toolbar>
        </StackItem>
        <StackItem isFilled style={{ display: 'flex', overflow: 'hidden' }}>
          <Dashboard
            basePath={`${HackathonPage.DASHBOARD}/`}
            ref={dashboardProviderAPI}
            readonly={readonly}
          />
        </StackItem>
      </Stack>
      {tabEditorOpen && <TabEditorModal isOpen onClose={() => setTabEditorOpen(false)} />}
    </>
  );
};

export default DashboardPage;
