import * as React from 'react';
import { CardConfig, CardDefinition, DashboardConfig, Layout } from '../../types';
import DashboardTabs from './DashboardTabs';
import Dashboard, { DashboardAPI } from './Dashboard';
import DashboardTab from './DashboardTab';
import DashboardRouter from './DashboardRouter';
import DashboardCardLoader from './DashboardCardLoader';
import DashboardGrid from './DashboardGrid';
import { DashboardCardFrame } from '../card-structure';

export type DashboardProviderAPI = DashboardAPI;

type Props = {
  onLayoutChange?: (dashboardId: string, layout: Layout[]) => void;

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

  readonly?: boolean;
};

const MemoCardContent: React.FC<{ data: any; Component: React.ComponentType }> = React.memo(
  ({ data, Component }) => <Component {...data} />,
);

const DashboardProvider: React.ForwardRefRenderFunction<DashboardProviderAPI, Props> = (
  {
    basePath = '/',
    selectedTab,
    defaultSelectedTab,
    onTabChange,
    dashboards,
    cardDefinitions,
    enableRouter,
    onLayoutChange,
    readonly,
  },
  ref,
) => {
  const dashboardRef = React.useRef<DashboardAPI>(null);

  React.useImperativeHandle(ref, () => ({
    fullscreenToggle: () => dashboardRef.current?.fullscreenToggle(),
  }));

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
    <Dashboard cardDefinitions={cardDefinitions} ref={dashboardRef}>
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
              <DashboardGrid
                readonly={readonly}
                cols={dashboard.cols}
                layout={dashboard.layout}
                onLayoutChange={(layout) => onLayoutChange && onLayoutChange(dashboard.id, layout)}
              >
                {dashboard.cards.map((card) => (
                  <div key={card.id}>
                    <React.Suspense fallback={null}>
                      <DashboardCardLoader config={card}>
                        {(Component) => (
                          <DashboardCardFrame config={card}>
                            <MemoCardContent data={card.data} Component={Component} />
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

export default React.forwardRef(DashboardProvider);
