import React from 'react';
import { CardConfig } from '../../types';

type Props = {
  config: CardConfig;
  children: React.ReactNode;
};
const DashboardCard: React.FC<Props> = ({ config, children }) => <>{children}</>;

export default DashboardCard;
