import * as React from 'react';
import { CardDefinition } from '../../types';

import './DefinitionIcon.scss';

type CatalogIconProps = {
  icon: CardDefinition['icon'];
};

const DefinitionIcon: React.FC<CatalogIconProps> = ({ icon }) => {
  if (!icon) return null;

  if (typeof icon === 'string') {
    return <img src={icon} alt="catalog icon" className="catalog-icon" />;
  }

  return icon;
};

export default DefinitionIcon;
