import React from 'react';
import {
  Masthead,
  MastheadContent,
  MastheadMain,
  MastheadToggle,
  Nav,
  NavList,
  NavItem,
  Page,
  PageSidebar,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Catalog from '../components/catalog/Catalog';
import { Pages } from './const';
import NotFound from './NotFound';
import DashboardPage from './DashboardPage';

const App: React.FC = () => {
  const navigate = useNavigate();
  const [isNavOpen, setNavOpen] = React.useState(true);
  const location = useLocation();
  const navItemSelected = location.pathname;

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
  const Navigation = (
    <Nav
      onSelect={({ itemId }) => {
        if (typeof itemId === 'string') {
          navigate(itemId);
        }
      }}
    >
      <NavList>
        <NavItem
          id={Pages.DASHBOARD}
          itemId={Pages.DASHBOARD}
          isActive={Pages.DASHBOARD === navItemSelected}
        >
          Dashboard
        </NavItem>
        <NavItem
          id={Pages.CATALOG}
          itemId={Pages.CATALOG}
          isActive={Pages.CATALOG === navItemSelected}
        >
          Catalog
        </NavItem>
      </NavList>
    </Nav>
  );
  const Sidebar = <PageSidebar nav={Navigation} isNavOpen={isNavOpen} />;

  return (
    <Page header={Header} sidebar={Sidebar}>
      <Routes>
        <Route path={Pages.DASHBOARD} element={<DashboardPage />} />
        <Route path={Pages.CATALOG} element={<Catalog />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Page>
  );
};

export default App;
