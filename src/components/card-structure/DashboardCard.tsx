import * as React from 'react';
import { Card } from '@patternfly/react-core';

type DashboardCardProps = React.ComponentProps<typeof Card>;

const DashboardCard: React.FC<DashboardCardProps> = (props) => {
  return <Card {...props} />;
};

export default DashboardCard;
