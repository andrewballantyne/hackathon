import * as React from 'react';
import { CardConfig } from '../../types';
import DashboardContext from './DashboardContext';

type Props = {
  config: CardConfig;
  children: (ContentComponent: React.ComponentType<any>) => React.ReactElement<any, any> | null;
};

const DashboardCardLooader: React.FC<Props> = ({ config, children }) => {
  const { idToCardDefinition } = React.useContext(DashboardContext);
  const loader = React.useMemo(
    () => idToCardDefinition[config.type]?.contentComponent,
    [config.type, idToCardDefinition],
  );
  // TODO error condition if loader == null
  const Component = React.useMemo(() => React.lazy(loader), [loader]);
  return Component ? children(Component) : null;
};

export default DashboardCardLooader;
