import React from 'react';

import '@patternfly/react-core/dist/styles/base.css';
import {
  Page,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadContent,
  PageSidebar,
  PageSection,
  PageSectionVariants,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import DashboardProvider from './DashboardProvider';
import { cardDefinitions, dashboards } from './dashboard.test';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const DashboardApp = () => {
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
      <MastheadMain></MastheadMain>
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
          ></Route>
        </Routes>
      </Page>
    </BrowserRouter>
  );
};

export default DashboardApp;
