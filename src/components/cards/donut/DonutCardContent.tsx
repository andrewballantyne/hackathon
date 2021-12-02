import { ChartDonut } from '@patternfly/react-charts';
import React from 'react';
import { DonutCardData } from './types';
import { CardProps } from '../../../types';

const DonutCardContent: React.FC<CardProps<DonutCardData>> = ({
  data: { ariaDesc, ariaTitle, data, title, subTitle, unit },
}) => (
  <ChartDonut
    ariaDesc={ariaDesc}
    ariaTitle={ariaTitle}
    constrainToVisibleArea={true}
    data={data}
    labels={({ datum }) => `${datum.x}: ${datum.y}${unit ?? ''}`}
    subTitle={subTitle}
    title={title}
  />
);

export default DonutCardContent;
