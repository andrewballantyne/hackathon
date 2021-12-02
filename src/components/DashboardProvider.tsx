import * as React from 'react';
import CardEditorModal from './card-editor/CardEditorModal';
import { CardConfig, CardDefinition, DashboardConfig, DashboardTabConfig } from '../types';
import DashboardContext from '../utils/DashboardContext';

type EditState = {
  config: CardConfig;
  onSave: (config: CardConfig) => void;
};

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
  const [editState, setEditState] = React.useState<EditState | undefined>();

  const editCard = React.useCallback((config: CardConfig, onSave: (config: CardConfig) => void) => {
    setEditState({ config, onSave });
  }, []);

  React.useEffect(() => {
    if (onDashboardChange && dashboard !== dashboardConfig) {
      onDashboardChange(dashboardConfig);
    }
    // Notify only when dashboard changes and not when callback or original dashboard config changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboardConfig]);

  return (
    <DashboardContext.Provider value={{ dashboard: dashboardConfig, definitions, editCard }}>
      {children}
      {editState ? (
        <CardEditorModal
          isOpen
          config={editState.config}
          onClose={() => setEditState(undefined)}
          onSave={(cardConfig, tabId) => {
            // TODO delete the card and layout from the OLD tab if tabId has changed
            setDashboard((dc) => ({
              ...dc,
              tabs: dc.tabs.reduce((acc, tab) => {
                if (tab.id === tabId) {
                  const i = tab.cards.findIndex((card) => card.id === cardConfig.id);
                  const cards = [...tab.cards.slice(0, i), cardConfig, ...tab.cards.slice(i + 1)];
                  acc.push({
                    ...tab,
                    cards,
                  });
                } else {
                  acc.push(tab);
                }
                return acc;
              }, [] as DashboardTabConfig[]),
            }));
          }}
        />
      ) : undefined}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
