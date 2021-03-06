import * as React from 'react';
import CardEditorModal from './card-editor/CardEditorModal';
import { CardConfig, CardDefinition, DashboardConfig, DashboardTabConfig, Layout } from '../types';
import DashboardContext, { DashboardContextProps } from '../utils/DashboardContext';
import useDashboardAdd from './useDashboardAdd';

type Props = {
  onDashboardChange?: (config: DashboardConfig) => void;
  dashboard?: DashboardConfig;
  definitions: CardDefinition[];
};

const DashboardProvider: React.FC<Props> = ({
  dashboard = { tabs: [] } as DashboardConfig,
  definitions,
  children,
  onDashboardChange,
}) => {
  const [dashboardConfig, setDashboard] = React.useState<DashboardConfig>(dashboard);
  const [editState, setEditState] = React.useState<{
    config: Parameters<DashboardContextProps['editCard']>[0];
    onSave: Parameters<DashboardContextProps['editCard']>[1];
  }>();

  const editCard = React.useCallback<DashboardContextProps['editCard']>(
    (config: CardConfig, onSave?: (config: CardConfig, tabId: string) => void) => {
      setEditState({ config, onSave });
    },
    [],
  );
  const addCard = useDashboardAdd(editCard);

  React.useEffect(() => {
    if (onDashboardChange && dashboard !== dashboardConfig) {
      onDashboardChange(dashboardConfig);
    }
    // Notify only when dashboard changes and not when callback or original dashboard config changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboardConfig]);

  const updateLayout = React.useCallback((tabId: string, layout: Layout[]) => {
    setDashboard((dc) => ({
      ...dc,
      tabs: dc.tabs.reduce((acc, tab) => {
        if (tab.id === tabId) {
          acc.push({
            ...tab,
            layout,
          });
        } else {
          acc.push(tab);
        }
        return acc;
      }, [] as DashboardTabConfig[]),
    }));
  }, []);

  const updateTabs = React.useCallback((newTabs: DashboardTabConfig[]) => {
    setDashboard((dc) => ({
      ...dc,
      tabs: newTabs,
    }));
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        dashboard: dashboardConfig,
        definitions,
        editCard,
        addCard,
        updateLayout,
        updateTabs,
      }}
    >
      {children}
      {editState ? (
        <CardEditorModal
          isOpen
          cardConfig={editState.config}
          onClose={() => setEditState(undefined)}
          onSave={(cardConfig, tabId) => {
            // TODO delete the card and layout from the OLD tab if tabId has changed
            setDashboard((dc) => ({
              ...dc,
              tabs: dc.tabs.reduce((acc, tab) => {
                if (tab.id === tabId) {
                  const i = tab.cards.findIndex((card) => card.id === cardConfig.id);
                  if (i === -1) {
                    // Add
                    acc.push({
                      ...tab,
                      cards: [...tab.cards, cardConfig],
                      layout: [...tab.layout, { i: cardConfig.id, x: 0, y: 0, w: 3, h: 2 }],
                    });
                  } else {
                    // Edit
                    const cards = [...tab.cards.slice(0, i), cardConfig, ...tab.cards.slice(i + 1)];
                    acc.push({
                      ...tab,
                      cards,
                    });
                  }
                } else {
                  acc.push(tab);
                }
                return acc;
              }, [] as DashboardTabConfig[]),
            }));
            editState.onSave && editState.onSave(cardConfig, tabId);
          }}
        />
      ) : undefined}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
