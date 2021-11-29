import React from 'react';
import { Card, CardTitle, CardBody } from '@patternfly/react-core';
import { CardConfig } from '../../types';

type Props = {
  config: CardConfig;
  children: React.ReactNode;
};
const DashboardCard: React.FC<Props> = ({ config, children }) => (
  <Card>
    <CardTitle>{config.label}</CardTitle>
    <CardBody>{children}</CardBody>
  </Card>
);

export default DashboardCard;
