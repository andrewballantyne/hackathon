import DonutChartIcon from '@patternfly/react-icons/dist/esm/icons/chart-pie-icon';
import { DonutCardData } from './types';
import { CardDefinition } from '../../../types';
import { CardType } from '../types';

const definition: CardDefinition<DonutCardData> = {
  id: CardType.DONUT,
  label: 'Donut Chart',
  description: 'Displays a donut chart.',
  icon: <DonutChartIcon />,
  images: [],
  settingsComponent: () =>
    import('./DonutCardSettings' /* webpackChunkName: "pf-dashboard-card-donut" */),
  contentComponent: () =>
    import('./DonutCardContent' /* webpackChunkName: "pf-dashboard-card-donut" */),
};

export default definition;
