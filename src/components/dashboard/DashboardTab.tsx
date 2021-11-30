import * as React from 'react';
import { Tab } from '@patternfly/react-core';
import { useNavigate } from 'react-router';

type Props = {
  id: string;
  basePath?: string;
} & Pick<React.ComponentProps<typeof Tab>, 'title' | 'eventKey'>;

const DashboardTab: React.FC<Props> = ({ id, basePath, children, title }) => {
  const navigate = useNavigate();
  return (
    <Tab
      eventKey={id}
      title={title}
      href={basePath ? `${basePath}${id}` : undefined}
      {...(basePath ? { onClick: () => navigate(`${basePath}${id}`) } : {})}
    >
      {children}
    </Tab>
  );
};

export default DashboardTab;
