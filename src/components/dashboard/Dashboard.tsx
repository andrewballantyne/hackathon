import * as React from 'react';
import { CardDefinition } from '../../types';
import DashboardContext from './DashboardContext';

import './Dashboard.scss';

type Props = {
  cardDefinitions: CardDefinition[];
};

const Dashboard: React.FC<Props> = ({ cardDefinitions, children }) => {
  const idToCardDefinition = React.useMemo(
    () =>
      cardDefinitions.reduce(
        (acc, v) => (acc[v.id] = v) && acc,
        {} as { [id: string]: CardDefinition },
      ),
    [cardDefinitions],
  );
  return (
    <div className="bender-dashboard">
      <DashboardContext.Provider value={{ idToCardDefinition }}>
        {children}
      </DashboardContext.Provider>
    </div>
  );
};

export default Dashboard;
