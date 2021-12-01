import * as React from 'react';
import { CatalogCardDefinition } from '../../types';

type CatalogIconProps = {
  icon: CatalogCardDefinition['icon'];
};

const CatalogIcon: React.FC<CatalogIconProps> = ({ icon }) => {
  if (icon === 'string') {
    return <img src={icon} alt="catalog icon" />;
  }

  // TODO: Support ReactNodes?
  return null;
};

export default CatalogIcon;
