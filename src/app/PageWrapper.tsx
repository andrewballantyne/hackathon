import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import { HackathonPage } from './const';

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const [isNavOpen, setNavOpen] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const navItemSelected = location.pathname;

  const headerToolbar = (
    <Toolbar id="toolbar">
      <ToolbarContent>
        <ToolbarItem>Hackathon By: Andrew Ballantyne and Christian Vogt</ToolbarItem>
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
          id={HackathonPage.DASHBOARD}
          itemId={HackathonPage.DASHBOARD}
          isActive={navItemSelected.startsWith(HackathonPage.DASHBOARD)}
        >
          Dashboard
        </NavItem>
        <NavItem
          id={HackathonPage.CATALOG}
          itemId={HackathonPage.CATALOG}
          isActive={navItemSelected.startsWith(HackathonPage.CATALOG)}
        >
          Catalog
        </NavItem>
      </NavList>
    </Nav>
  );
  const Sidebar = <PageSidebar nav={Navigation} isNavOpen={isNavOpen} />;

  return (
    <Page header={Header} sidebar={Sidebar}>
      {children}
    </Page>
  );
};

export default PageWrapper;
