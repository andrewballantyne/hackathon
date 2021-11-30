import React from 'react';
import {
  Masthead,
  MastheadContent,
  MastheadMain,
  MastheadToggle,
  Page,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardProvider from '../components/dashboard/DashboardProvider';
import { cardDefinitions, dashboards } from '../components/dashboard/dashboard.test';

const App: React.FC = () => {
  const [isNavOpen, setNavOpen] = React.useState(true);

  const headerToolbar = (
    <Toolbar id="toolbar">
      <ToolbarContent>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const Header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          isNavOpen={isNavOpen}
          onNavToggle={() => setNavOpen((state) => !state)}
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain />
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );
  const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} />;

  return (
    <BrowserRouter>
      <Page header={Header} sidebar={Sidebar}>
        <Routes>
          <Route
            path="/*"
            element={
              <PageSection variant={PageSectionVariants.default} style={{ padding: 0 }}>
                <DashboardProvider cardDefinitions={cardDefinitions} dashboards={dashboards} />
              </PageSection>
            }
          />
        </Routes>
      </Page>
    </BrowserRouter>
  );
};

export default App;
