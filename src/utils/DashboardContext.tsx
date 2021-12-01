import * as React from 'react';
import { CardDefinition } from '../types';

type ContextProps = {
  idToCardDefinition: { [id: string]: CardDefinition };
  isFullscreen: boolean;
};

const DashboardContext = React.createContext<ContextProps>({
  idToCardDefinition: {},
  isFullscreen: false,
});

export default DashboardContext;
