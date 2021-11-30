import * as React from 'react';
import {
  Bullseye,
  Card,
  EmptyState,
  EmptyStateIcon,
  EmptyStateVariant,
  Title,
} from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

import './CatalogCard.scss';
import { MouseEventHandler } from 'react';

type CatalogCardProps = {
  isSelected?: boolean;
  onSelect: MouseEventHandler<HTMLElement>;
};

const CatalogCard: React.FC<CatalogCardProps> = ({ isSelected, onSelect }) => {
  return (
    <Card
      isHoverable
      isSelectable
      className="catalog-card"
      onClick={onSelect}
      isSelected={isSelected}
    >
      <Bullseye>
        <EmptyState variant={EmptyStateVariant.xs}>
          <EmptyStateIcon icon={PlusCircleIcon} />
          <Title headingLevel="h2" size="md">
            Not Implemented Yet
          </Title>
        </EmptyState>
      </Bullseye>
    </Card>
  );
};

export default CatalogCard;
