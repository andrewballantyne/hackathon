import * as React from 'react';
import { CatalogCardDefinition } from '../../types';

type CatalogImageDeckProps = {
  images: CatalogCardDefinition['images'];
};

// TODO: Support showing carousel OR manual slide deck
const CatalogImageDeck: React.FC<CatalogImageDeckProps> = (props) => {
  return <div>Images deck</div>;
};

export default CatalogImageDeck;
