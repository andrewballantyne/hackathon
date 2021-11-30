import * as React from 'react';
import { CatalogCardDefinition } from '../../types';
import { Title } from '@patternfly/react-core';

type CatalogSelectedSidebarContentProps = {
  selectedDefinition?: CatalogCardDefinition;
};

const CatalogSelectedSidebarContent: React.FC<CatalogSelectedSidebarContentProps> = ({
  selectedDefinition,
}) => {
  if (!selectedDefinition) return null;

  const { label, description } = selectedDefinition;

  return (
    <>
      <Title headingLevel="h2">{label}</Title>
      <p>{description}</p>
    </>
  );
};

export default CatalogSelectedSidebarContent;
