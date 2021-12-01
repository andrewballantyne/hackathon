import { MarkdownCardData } from './types';
import { CatalogCardDefinition } from '../../../types';
import { dashboardMarkdownCards, quotaMarkdownCard } from '../../../test/base64-images';

const definition: CatalogCardDefinition<MarkdownCardData> = {
  id: 'core.markdown',
  label: 'Markdown',
  description: 'Displays a custom markdown message.',
  icon: '',
  images: [quotaMarkdownCard, dashboardMarkdownCards],
  editComponent: () => import('./MarkdownCardEdit'),
  contentComponent: () => import('./MarkdownCardContent'),
};

export default definition;
