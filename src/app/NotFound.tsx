import * as React from 'react';
import { Link } from 'react-router-dom';
import { EmptyState, EmptyStateIcon, EmptyStateBody, Title } from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/js/icons/cubes-icon';
import { HackathonPage } from './const';

type NotFoundProps = {};

const NotFound: React.FC<NotFoundProps> = (props) => {
  return (
    <EmptyState>
      <EmptyStateIcon icon={CubesIcon} />
      <Title headingLevel="h4" size="lg">
        404 Not Found
      </Title>
      <EmptyStateBody>
        <p>
          Dashboards are over <Link to={HackathonPage.DASHBOARD}>here</Link>.
        </p>
      </EmptyStateBody>
    </EmptyState>
  );
};

export default NotFound;
