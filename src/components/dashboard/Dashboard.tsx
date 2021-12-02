import * as React from 'react';
import DashboardTabs from './DashboardTabs';
import DashboardFindNewName, { DashboardFindNewNameAPI } from './DashboardFindNewName';
import DashboardTab from './DashboardTab';
import DashboardRouter from './DashboardRouter';
import DashboardCardLoader from './DashboardCardLoader';
import DashboardGrid from './DashboardGrid';
import { DashboardCardFrame } from '../card-structure';
import EditableWrapper from '../card-editor/EditableWrapper';
import DashboardContext from '../../utils/DashboardContext';

export type DashboardAPI = DashboardFindNewNameAPI;

type Props = {
  // The base patch for each tab.
  // Must end with '/'.
  basePath?: string;

  // control selected tab
  // alternatively supply a baseURL and control the tabs via routes
  selectedTab?: string;
  onTabChange?: (dashboardId: string) => void;
  // uncontrolled default selected tab
  defaultSelectedTab?: string;

  // control fullscreen mode
  fullscreenEnabled?: boolean;
  onFullscreen?: (enable: boolean) => void;

  fullscreenSettings?: {
    hideTabs?: boolean;
    cycle?: boolean;
    cycleDelay?: number;
  };

  readonly?: boolean;
};

const Dashboard: React.ForwardRefRenderFunction<DashboardAPI, Props> = (
  { selectedTab, defaultSelectedTab, onTabChange, readonly, basePath },
  ref,
) => {
  const {
    definitions,
    dashboard: { tabs },
    updateLayout,
  } = React.useContext(DashboardContext);
  const dashboardRef = React.useRef<DashboardFindNewNameAPI>(null);
  const [dragId, setDragId] = React.useState<string | undefined>();
  const [resizeId, setResizeId] = React.useState<string | undefined>();

  React.useImperativeHandle(ref, () => ({
    fullscreenToggle: () => dashboardRef.current?.fullscreenToggle(),
  }));

  const firstTab = selectedTab ?? defaultSelectedTab ?? tabs[0]?.id ?? undefined;
  const [activeTab, setActiveTab] = React.useState<string | undefined>(firstTab);

  const onChange = React.useCallback(
    (id) => {
      if (basePath || selectedTab) {
        onTabChange && onTabChange(id);
      } else {
        setActiveTab(id);
      }
    },
    [selectedTab, basePath, onTabChange],
  );

  React.useEffect(() => {
    if (!basePath && selectedTab != null) {
      setActiveTab(selectedTab);
    }
  }, [selectedTab, basePath]);

  const contents = (selected: string | undefined) => (
    <DashboardFindNewName cardDefinitions={definitions} ref={dashboardRef}>
      <DashboardTabs
        onChange={onChange}
        selected={selected}
        defaultSelected={basePath ? firstTab : undefined}
      >
        {tabs.map((tab) => (
          <DashboardTab
            key={tab.id}
            eventKey={tab.id}
            id={tab.id}
            title={tab.label}
            basePath={basePath}
          >
            {selected === tab.id ? (
              <DashboardGrid
                readonly={readonly}
                cols={tab.cols}
                layout={tab.layout}
                onLayoutChange={(layout) => updateLayout(tab.id, layout)}
                onDragStart={(id) => setDragId(id)}
                onDragStop={() => setDragId(undefined)}
                onResizeStart={(id) => setResizeId(id)}
                onResizeStop={() => setResizeId(undefined)}
              >
                {tab.cards.map((card) => (
                  <div key={card.id}>
                    <DashboardCardLoader config={card}>
                      {(Component) => (
                        <EditableWrapper config={card}>
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
    </DashboardFindNewName>
  );

  return basePath ? (
    <DashboardRouter basePath={basePath} defaultTab={firstTab}>
      {contents}
    </DashboardRouter>
  ) : (
    contents(activeTab)
  );
};

export default React.forwardRef(Dashboard);
