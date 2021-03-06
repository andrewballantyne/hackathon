import OutlinedWindowMaximizeIcon from '@patternfly/react-icons/dist/esm/icons/outlined-window-maximize-icon';
import { IFrameCardData } from './types';
import { CardDefinition } from '../../../types';
import { CardType } from '../types';

const definition: CardDefinition<IFrameCardData> = {
  id: CardType.IFRAME,
  label: 'IFrame',
  description: 'Displays an iframe.',
  icon: <OutlinedWindowMaximizeIcon />,
  images: [],
  settingsComponent: () =>
    import('./IFrameCardSettings' /* webpackChunkName: "pf-dashboard-card-iframe" */),
  contentComponent: () =>
    import('./IFrameCardContent' /* webpackChunkName: "pf-dashboard-card-iframe" */),
};

export default definition;
