import * as React from 'react';
import CardEditorModal from './card-editor/CardEditorModal';
import { CardConfig, CardDefinition, DashboardConfig, DashboardTabConfig } from '../types';
import DashboardContext, { DashboardContextProps } from '../utils/DashboardContext';
import useDashboardAdd from './useDashboardAdd';
import { useNavigate } from 'react-router-dom';
import { HackathonPage } from '../app/const';

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
  const [editState, setEditState] = React.useState<
    Parameters<DashboardContextProps['editCard']>[0] | undefined
  >();
  const navigate = useNavigate();

  const editCard = React.useCallback<DashboardContextProps['editCard']>((config: CardConfig) => {
    setEditState(config);
  }, []);
  const addCard = useDashboardAdd(editCard);

  React.useEffect(() => {
    if (onDashboardChange && dashboard !== dashboardConfig) {
      onDashboardChange(dashboardConfig);
    }
    // Notify only when dashboard changes and not when callback or original dashboard config changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dashboardConfig]);

  return (
    <DashboardContext.Provider
      value={{ dashboard: dashboardConfig, definitions, editCard, addCard }}
    >
      {children}
      {editState ? (
        <CardEditorModal
          isOpen
          cardConfig={editState}
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
                      layout: [...tab.layout, { i: cardConfig.id, x: 0, y: 0, w: 1, h: 1 }],
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
            // TODO: go to specific dashboard tab
            navigate(HackathonPage.DASHBOARD);
          }}
        />
      ) : undefined}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
