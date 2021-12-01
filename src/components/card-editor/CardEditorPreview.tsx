import * as React from 'react';
import { CardConfig } from '../../types';
import { DashboardCardFrame } from '../card-structure';
import DashboardCardLoader from '../dashboard/DashboardCardLoader';

type Props = {
  width?: number;
  height?: number;
  config: CardConfig;
};

const CardEditorPreview: React.FC<Props> = ({ config, width = 300, height = 300 }) => (
  <div style={{ width, height }}>
    <DashboardCardLoader config={config}>
      {(Component) => (
        <DashboardCardFrame config={config} readonly>
          <Component data={config.data} />
        </DashboardCardFrame>
      )}
    </DashboardCardLoader>
  </div>
);

export default CardEditorPreview;
