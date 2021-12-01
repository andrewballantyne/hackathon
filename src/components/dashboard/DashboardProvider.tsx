import * as React from 'react';
import { CardConfig, CardDefinition, DashboardConfig, Layout } from '../../types';
import DashboardTabs from './DashboardTabs';
import Dashboard, { DashboardAPI } from './Dashboard';
import DashboardTab from './DashboardTab';
import DashboardRouter from './DashboardRouter';
import DashboardCardLoader from './DashboardCardLoader';
import DashboardGrid from './DashboardGrid';
import { DashboardCardFrame } from '../card-structure';
import EditableWrapper from '../card-editor/EditableWrapper';

export type DashboardProviderAPI = DashboardAPI;

type Props = {
  onCardChange?: (dashboardId: string, config: CardConfig) => void;
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
    onCardChange,
  },
  ref,
) => {
  const dashboardRef = React.useRef<DashboardAPI>(null);
  const [dragId, setDragId] = React.useState<string | undefined>();
  const [resizeId, setResizeId] = React.useState<string | undefined>();

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
                onLayoutChange={
                  onLayoutChange ? (layout) => onLayoutChange(dashboard.id, layout) : undefined
                }
                onDragStart={(id) => setDragId(id)}
                onDragStop={() => setDragId(undefined)}
                onResizeStart={(id) => setResizeId(id)}
                onResizeStop={() => setResizeId(undefined)}
              >
                {dashboard.cards.map((card) => (
                  <div key={card.id}>
                    <DashboardCardLoader config={card}>
                      {(Component) => (
                        <EditableWrapper
                          config={card}
                          onCardChange={
                            onCardChange
                              ? (config) => onCardChange(dashboard.id, config)
                              : undefined
                          }
                        >
                          <DashboardCardFrame config={card} readonly={readonly}>
                            <Component
                              data={card.data}
                              resizing={resizeId === card.id}
                              dragging={dragId === card.id}
                            />
                          </DashboardCardFrame>
                        </EditableWrapper>
                      )}
                    </DashboardCardLoader>
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
