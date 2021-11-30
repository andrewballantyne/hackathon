import {
  Stack,
  StackItem,
  Switch,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import React from 'react';
import DashboardProvider from '../components/dashboard/DashboardProvider';
import { cardDefinitions, dashboards } from '../test/dashboard.test';
import { DashboardConfig } from '../types';

const DashboardPage: React.FC = () => {
  const [config, setConfig] = React.useState(dashboards);
  const [readonly, setReadonly] = React.useState(false);

  return (
    <Stack style={{ flexGrow: 1 }}>
      <StackItem>
        <Toolbar>
          <ToolbarContent>
            <ToolbarGroup alignment={{ default: 'alignRight' }}>
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
        <DashboardProvider
          readonly={readonly}
          cardDefinitions={cardDefinitions}
          dashboards={config}
          onLayoutChange={(id, layout) => {
            setConfig((c) =>
              c.reduce((acc, d) => {
                if (d.id === id) {
                  acc.push({
                    ...d,
                    layout,
                  });
                } else {
                  acc.push(d);
                }
                return acc;
              }, [] as DashboardConfig[]),
            );
          }}
        />
      </StackItem>
    </Stack>
  );
};

export default DashboardPage;
