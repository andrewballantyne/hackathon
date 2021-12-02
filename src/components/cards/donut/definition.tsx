import DonutChartIcon from '@patternfly/react-icons/dist/esm/icons/chart-pie-icon';
import { DonutCardData } from './types';
import { CardDefinition } from '../../../types';
import { CardType } from '../types';
import { donutPreview } from '../../../test/base64-images';

const definition: CardDefinition<DonutCardData> = {
  id: CardType.DONUT,
  label: 'Donut Chart',
  description: 'Displays a donut chart.',
  icon: <DonutChartIcon />,
  images: [donutPreview],
  settingsComponent: () =>
    import('./DonutCardSettings' /* webpackChunkName: "pf-dashboard-card-donut" */),
  contentComponent: () =>
    import('./DonutCardContent' /* webpackChunkName: "pf-dashboard-card-donut" */),
  defaultData: {
    data: [
      { x: 'Cats', y: 35 },
      { x: 'Dogs', y: 55 },
      { x: 'Birds', y: 10 },
    ],
  },
};

export default definition;
