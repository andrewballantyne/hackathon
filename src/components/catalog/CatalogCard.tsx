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
import { CardDefinition } from '../../types';
import CatalogIcon from './CatalogIcon';
import CatalogImageDeck from './CatalogImageDeck';

import './CatalogCard.scss';

type CatalogCardProps = {
  cardDefinition: CardDefinition;
  isSelected?: boolean;
  onSelect: React.MouseEventHandler<HTMLElement>;
  onDashboardAdd: (cardDefinition: CardDefinition) => void;
};

const CatalogCard: React.FC<CatalogCardProps> = ({
  cardDefinition,
  isSelected,
  onSelect,
  onDashboardAdd,
}) => {
  const { label, icon, images } = cardDefinition;

  const hasImages = images && images.filter((v) => !!v).length > 0;

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
          <CatalogIcon icon={icon} /> {label}
        </CardHeaderMain>
        <CardActions>
          <Button
            isSmall
            variant="link"
            icon={<PlusIcon />}
            onClick={(e) => {
              e.stopPropagation();
              onDashboardAdd(cardDefinition);
            }}
          >
            Dashboard
          </Button>
        </CardActions>
      </CardHeader>
      <CardBody className="catalog-card__card-body">
        <Bullseye>
          {hasImages ? (
            <CatalogImageDeck images={images} />
          ) : (
            <EmptyState variant={EmptyStateVariant.xs}>
              <EmptyStateIcon icon={OutlinedFileImage} />
              <Title headingLevel="h2" size="md">
                No preview images available
              </Title>
            </EmptyState>
          )}
        </Bullseye>
      </CardBody>
    </Card>
  );
};

export default CatalogCard;
