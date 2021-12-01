import * as React from 'react';
import MarkdownIcon from '@patternfly/react-icons/dist/esm/icons/markdown-icon';
import { MarkdownCardData } from './types';
import { CatalogCardDefinition } from '../../../types';
import { dashboardMarkdownCards, quotaMarkdownCard } from '../../../test/base64-images';

const definition: CatalogCardDefinition<MarkdownCardData> = {
  id: 'core.markdown',
  label: 'Markdown',
  description: 'Displays a custom markdown message.',
  icon: <MarkdownIcon />,
  images: [quotaMarkdownCard, dashboardMarkdownCards],
  settingsComponent: () =>
    import('./MarkdownCardSettings' /* webpackChunkName: "pf-dashboard-card-markdown" */),
  contentComponent: () =>
    import('./MarkdownCardContent' /* webpackChunkName: "pf-dashboard-card-markdown" */),
};

export default definition;
