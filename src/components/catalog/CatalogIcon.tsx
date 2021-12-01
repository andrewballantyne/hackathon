import * as React from 'react';
import { CatalogCardDefinition } from '../../types';

type CatalogIconProps = {
  icon: CatalogCardDefinition['icon'];
};

const CatalogIcon: React.FC<CatalogIconProps> = ({ icon }) => {
  if (!icon) return null;

  if (icon === 'string') {
    return <img src={icon} alt="catalog icon" />;
  }

  // TODO: Support ReactNodes?
  console.warn('CatalogIcon not implemented for this type', typeof icon, icon);
  return null;
};

export default CatalogIcon;
