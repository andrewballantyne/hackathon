import * as React from 'react';
import {
  Bullseye,
  Button,
  Card,
  CardActions,
  CardBody,
  CardHeader,
  CardHeaderMain,
  EmptyState,
  EmptyStateIcon,
  EmptyStateVariant,
  Title,
} from '@patternfly/react-core';
import OutlinedFileImage from '@patternfly/react-icons/dist/js/icons/outlined-file-image-icon';
import PlusIcon from '@patternfly/react-icons/dist/js/icons/plus-icon';
import { CatalogCardDefinition } from '../../types';
import CatalogIcon from './CatalogIcon';
import CatalogImageDeck from './CatalogImageDeck';

import './CatalogCard.scss';

type CatalogCardProps = {
  cardDefinition: CatalogCardDefinition;
  isSelected?: boolean;
  onSelect: React.MouseEventHandler<HTMLElement>;
};

const CatalogCard: React.FC<CatalogCardProps> = ({ cardDefinition, isSelected, onSelect }) => {
  const { label, icon, images } = cardDefinition;

  const hasImages = images.filter((v) => !!v).length > 0;

  return (
    <Card
      isHoverable
      isSelectable
      className="catalog-card"
      onClick={onSelect}
      isSelected={isSelected}
    >
      <CardHeader>
        <CardHeaderMain>
          <CatalogIcon icon={icon} />
          {label}
        </CardHeaderMain>
        <CardActions>
          <Button
            isSmall
            variant="link"
            icon={<PlusIcon />}
            onClick={(e) => {
              e.stopPropagation();
              alert('you shall not pass (today)');
            }}
          >
            Dashboard
          </Button>
        </CardActions>
      </CardHeader>
      <CardBody>
        {hasImages ? (
          <CatalogImageDeck images={images} />
        ) : (
          <Bullseye>
            <EmptyState variant={EmptyStateVariant.xs}>
              <EmptyStateIcon icon={OutlinedFileImage} />
              <Title headingLevel="h2" size="md">
                No preview images available
              </Title>
            </EmptyState>
          </Bullseye>
        )}
      </CardBody>
    </Card>
  );
};

export default CatalogCard;
