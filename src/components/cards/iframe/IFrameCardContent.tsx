import { EmptyState, EmptyStateIcon, Title } from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import React from 'react';
import { IFrameCardData } from './types';
import { CardProps } from '../../../types';

const MarkdownCardContent: React.FC<CardProps<IFrameCardData>> = ({ data: { title, url } }) =>
  url ? (
    <iframe style={{ flexGrow: 1, height: '100%', border: 'none' }} src={url} title={title} />
  ) : (
    <EmptyState>
      <EmptyStateIcon icon={CubesIcon} />
      <Title headingLevel="h4" size="lg">
        Please supply a URL
      </Title>
    </EmptyState>
  );

export default MarkdownCardContent;
