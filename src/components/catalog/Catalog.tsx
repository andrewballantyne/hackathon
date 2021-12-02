import * as React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelContent,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Gallery,
  GalleryItem,
  PageSection,
} from '@patternfly/react-core';
import { cardDefinitions } from '../../test/dashboard.test';
import { CatalogCardDefinition } from '../../types';
import CatalogCard from './CatalogCard';
import CatalogSelectedSidebarContent from './CatalogSelectedSidebarContent';

import './Catalog.scss';

const MAX_WIDTHS = {
  default: '300px',
};
const MIN_WIDTHS = MAX_WIDTHS;

type CatalogProps = {
  onNewCardInstance: (cardDefinition: CatalogCardDefinition) => void;
};

const Catalog: React.FC<CatalogProps> = ({ onNewCardInstance }) => {
  const [selectedId, setSelectedId] = React.useState<string>('');

  // TODO: did we want to pass in the definitions?
  const selectedDefinition: CatalogCardDefinition | undefined = cardDefinitions.find(
    ({ id }) => id === selectedId,
  );
  const isExpanded = !!selectedDefinition;
  return (
    <Drawer isExpanded={isExpanded} className="catalog">
      <DrawerContent
        panelContent={
          <DrawerPanelContent
            isResizable
            id="right-resize-panel"
            defaultSize={'500px'}
            minSize={'300px'}
          >
            <DrawerHead>
              <CatalogSelectedSidebarContent selectedDefinition={selectedDefinition} />
              <DrawerActions>
                <DrawerCloseButton onClick={() => setSelectedId('')} />
              </DrawerActions>
            </DrawerHead>
          </DrawerPanelContent>
        }
      >
        <DrawerContentBody className="catalog__content-body">
          <PageSection onClick={() => setSelectedId('')}>
            <Gallery hasGutter maxWidths={MAX_WIDTHS} minWidths={MIN_WIDTHS}>
              {cardDefinitions.map((cardDefinition) => (
                <GalleryItem key={cardDefinition.id}>
                  <CatalogCard
                    cardDefinition={cardDefinition}
                    onSelect={(e) => {
                      e.stopPropagation();
                      setSelectedId(cardDefinition.id);
                    }}
                    isSelected={selectedId === cardDefinition.id}
                    onDashboardAdd={onNewCardInstance}
                  />
                </GalleryItem>
              ))}
            </Gallery>
          </PageSection>
        </DrawerContentBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Catalog;
