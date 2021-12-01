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

  const validImages = images.filter((src) => !!src);

  return (
    <Stack hasGutter>
      <StackItem>
        <Title headingLevel="h2" size={TitleSizes['3xl']}>
          <CatalogIcon icon={icon} /> {label}
        </Title>
      </StackItem>
      <StackItem>
        <p>{description}</p>
      </StackItem>
      {validImages.length > 0 && (
        <StackItem>
          <Stack hasGutter>
            <StackItem>
              <Title headingLevel="h3">Preview Images</Title>
            </StackItem>
            {validImages.map((src) => (
              <StackItem key={src}>
                <CatalogImage src={src} />
              </StackItem>
            ))}
          </Stack>
        </StackItem>
      )}
    </Stack>
  );
};

export default CatalogSelectedSidebarContent;
