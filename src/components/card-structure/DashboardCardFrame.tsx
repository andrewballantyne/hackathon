import { Card } from '@patternfly/react-core';
import React from 'react';
import { CardConfig } from '../../types';

type Props = {
  config: CardConfig;
  children: React.ReactNode;
};

const DashboardCardFrame: React.FC<Props> = ({ config, children }) => (
  <Card isFullHeight isPlain={config.frameless}>
    {children}
  </Card>
);

export default DashboardCardFrame;
