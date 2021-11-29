import { MarkdownCardData } from './types';
import { CatalogCardDefinition } from '../../../../types';

const definition: CatalogCardDefinition<MarkdownCardData> = {
  id: 'core.markdown',
  label: 'Markdown',
  description: 'Displays a custom markdown message.',
  icon: '',
  images: [],
  editComponent: () => import('./MarkdownCardEdit'),
  contentComponent: () => import('./MarkdownCardContent'),
};

export default definition;
