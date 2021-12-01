import { IFrameCardData } from './types';
import { CatalogCardDefinition } from '../../../types';

const definition: CatalogCardDefinition<IFrameCardData> = {
  id: 'core.iframe',
  label: 'IFrame',
  description: 'Displays an iframe.',
  icon: '',
  images: [],
  settingsComponent: () =>
    import('./IFrameCardSettings' /* webpackChunkName: "pf-dashboard-card-iframe" */),
  contentComponent: () =>
    import('./IFrameCardContent' /* webpackChunkName: "pf-dashboard-card-iframe" */),
};

export default definition;
