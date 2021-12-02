import * as React from 'react';
import { CardConfig, CardDefinition, DashboardConfig } from '../types';

export type DashboardContextProps = {
  dashboard: DashboardConfig;
  definitions: CardDefinition[];
  addCard: (cardType: string, defaults?: CardConfig) => void;
  editCard: (config: CardConfig) => void;
};

const DashboardContext = React.createContext<DashboardContextProps>({
  dashboard: { tabs: [] },
  definitions: [],
  addCard: () => {},
  editCard: () => {},
});

export default DashboardContext;
