import * as React from 'react';
import { CardConfig, CardDefinition, DashboardConfig, Layout } from '../types';

export type DashboardContextProps = {
  dashboard: DashboardConfig;
  definitions: CardDefinition[];
  addCard: (cardType: string, defaults?: Partial<Omit<CardConfig, 'type'>>) => void;
  editCard: (config: CardConfig) => void;
  updateLayout: (tabId: string, layout: Layout[]) => void;
};

const DashboardContext = React.createContext<DashboardContextProps>({
  dashboard: { tabs: [] },
  definitions: [],
  addCard: () => {},
  editCard: () => {},
  updateLayout: () => {},
});

export default DashboardContext;
