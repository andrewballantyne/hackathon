import * as React from 'react';
import { CardDefinition } from '../../types';

type ContextProps = {
  idToCardDefinition: { [id: string]: CardDefinition };
};

const DashboardContext = React.createContext<ContextProps>({ idToCardDefinition: {} });

export default DashboardContext;
