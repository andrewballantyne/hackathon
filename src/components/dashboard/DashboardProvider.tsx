import * as React from 'react';
import { CardDefinition, DashboardConfig, CardConfig } from '../../types';
import DashboardTabs from './DashboardTabs';
import Dashboard from './Dashboard';
import DashboardTab from './DashboardTab';
import DashboardRouter from './DashboardRouter';
import DashboardCardLoader from './DashboardCardLoader';
import DashboardGrid from './DashboardGrid';
import { DashboardCardFrame } from '../card-structure';

type Props = {
  onDashboardChange?: (dashboard: DashboardConfig) => void;
  onCardChange?: (dashboard: DashboardConfig, card: CardConfig) => void;

  dashboards: DashboardConfig[];

  // control selected tab
  // alternatively supply a baseURL and control the tabs via routes
  selectedTab?: string;
  onTabChange?: (dashboardId: string) => void;
  // uncontrolled default selected tab
  defaultSelectedTab?: string;

  // The base patch for each tab.
  // Must end with '/'.
  // Defaults to '/'.
  basePath?: string;

  // control selected tab via route
  enableRouter?: boolean;

  // control fullscreen mode
  fullscreenEnabled?: boolean;
  onFullscreen?: (enable: boolean) => void;

  fullscreenSettings?: {
    hideTabs?: boolean;
    cycle?: boolean;
    cycleDelay?: number;
  };

  cardDefinitions: CardDefinition[];
};

const DashboardProvider: React.FC<Props> = ({
  //   onDashboardChange,
  //   onCardChange,
  basePath = '/',
  selectedTab,
  defaultSelectedTab,
  onTabChange,
  dashboards,
  cardDefinitions,
  enableRouter,
}) => {
  const [activeTab, setActiveTab] = React.useState<string | undefined>(
    selectedTab ?? defaultSelectedTab ?? dashboards[0]?.id ?? undefined,
  );

  const onChange = React.useCallback(
    (id) => {
      if (enableRouter || selectedTab) {
        onTabChange && onTabChange(id);
      } else {
        setActiveTab(id);
      }
    },
    [selectedTab, enableRouter, onTabChange],
  );

  React.useEffect(() => {
    if (!enableRouter && selectedTab != null) {
      setActiveTab(selectedTab);
    }
  }, [selectedTab, enableRouter]);

  const contents = (selected: string | undefined) => (
    <Dashboard cardDefinitions={cardDefinitions}>
      <DashboardTabs
        onChange={onChange}
        selected={selected}
        defaultSelected={enableRouter ? defaultSelectedTab : undefined}
      >
        {dashboards.map((dashboard) => (
          <DashboardTab
            key={dashboard.id}
            eventKey={dashboard.id}
            id={dashboard.id}
            title={dashboard.label}
            basePath={enableRouter ? basePath : undefined}
          >
            {selected === dashboard.id ? (
              <DashboardGrid cols={dashboard.cols}>
                {dashboard.cards.map((card) => (
                  <div key={card.id} data-grid={card.gridItem} className="bender-grid-item">
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <DashboardCardLoader config={card}>
                        {(Component) => (
                          <DashboardCardFrame config={card}>
                            <Component {...card.data} />{' '}
                          </DashboardCardFrame>
                        )}
                      </DashboardCardLoader>
                    </React.Suspense>
                  </div>
                ))}
              </DashboardGrid>
            ) : null}
          </DashboardTab>
        ))}
      </DashboardTabs>
    </Dashboard>
  );

  return enableRouter ? (
    <DashboardRouter basePath={basePath}>{contents}</DashboardRouter>
  ) : (
    contents(activeTab)
  );
};

export default DashboardProvider;
