import * as React from 'react';
import { CatalogCardDefinition } from '../../types';

type CatalogImageProps = {
  src: CatalogCardDefinition['images'][0];
};

const CatalogImage: React.FC<CatalogImageProps> = ({ src }) => {
  return <img src={src} alt="catalog example" />;
};

export default CatalogImage;
