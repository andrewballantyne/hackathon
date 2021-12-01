import * as React from 'react';
import { CatalogCardDefinition } from '../../types';
import { Stack, StackItem, Title, TitleSizes } from '@patternfly/react-core';
import CatalogImage from './CatalogImage';
import CatalogIcon from './CatalogIcon';

type CatalogSelectedSidebarContentProps = {
  selectedDefinition?: CatalogCardDefinition;
};

const CatalogSelectedSidebarContent: React.FC<CatalogSelectedSidebarContentProps> = ({
  selectedDefinition,
}) => {
  if (!selectedDefinition) return null;

  const { label, description, icon, images } = selectedDefinition;

  return (
    <Stack hasGutter>
      <StackItem>
        <Title headingLevel="h2" size={TitleSizes['3xl']}>
          {icon && <CatalogIcon icon={icon} />}
          {label}
        </Title>
      </StackItem>
      <StackItem>
        <p>{description}</p>
      </StackItem>
      {images
        .filter((src) => !!src)
        .map((src) => (
          <StackItem key={src}>
            {images.map((image) => (
              <CatalogImage src={image} />
            ))}
          </StackItem>
        ))}
    </Stack>
  );
};

export default CatalogSelectedSidebarContent;
