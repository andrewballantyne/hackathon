import * as React from 'react';
import { CatalogCardDefinition } from '../../types';

type CatalogIconProps = {
  icon: CatalogCardDefinition['icon'];
};

const CatalogIcon: React.FC<CatalogIconProps> = ({ icon }) => {
  if (!icon) return null;

  if (typeof icon === 'string') {
    return <img src={icon} alt="catalog icon" className="catalog-icon" />;
  }

  return icon;
};

export default CatalogIcon;
