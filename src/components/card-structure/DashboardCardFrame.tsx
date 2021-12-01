import { Card } from '@patternfly/react-core';
import React from 'react';
import { CardConfig } from '../../types';

type Props = {
  config: CardConfig;
  readonly?: boolean;
  children: React.ReactNode;
};

const DashboardCardFrame: React.FC<Props> = ({ config, readonly, children }) => (
  <Card
    isFullHeight
    isPlain={config.frameless}
    style={{ overflow: 'hidden', pointerEvents: readonly ? 'auto' : 'none' }}
  >
    {children}
  </Card>
);

export default DashboardCardFrame;
