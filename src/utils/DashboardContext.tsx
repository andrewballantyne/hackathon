import * as React from 'react';
import { CardConfig, CardDefinition, DashboardConfig } from '../types';

type Props = {
  dashboard: DashboardConfig;
  definitions: CardDefinition[];
  editCard: (config: CardConfig) => void;
};

const DashboardContext = React.createContext<Props>({
  dashboard: { tabs: [] },
  definitions: [],
  editCard: () => {},
});

export default DashboardContext;
