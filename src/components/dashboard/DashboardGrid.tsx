import * as React from 'react';
import GridLayout, { WidthProvider } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Layout } from '../../types';

const GridLayoutWithWidth = WidthProvider(GridLayout);

type Props = {
  layout?: Layout[];
  cols?: number;
  padding?: number;
  gap?: number;
  onLayoutChange?: (layout: Layout[]) => void;
  readonly?: boolean;
};

const DashboardGrid: React.FC<Props> = ({
  cols,
  children,
  layout,
  onLayoutChange,
  readonly,
  padding = 24,
  gap = 16,
}) => (
  <GridLayoutWithWidth
    layout={layout}
    onLayoutChange={
      onLayoutChange &&
      ((l) =>
        onLayoutChange(
          l.reduce((acc, { i, x, y, w, h }) => {
            acc.push({ i, x, y, w, h });
            return acc;
          }, [] as Layout[]),
        ))
    }
    cols={cols ?? 12}
    containerPadding={[padding, padding]}
    margin={[gap, gap]}
    isDraggable={!readonly}
    isResizable={!readonly}
  >
    {children}
  </GridLayoutWithWidth>
);

export default DashboardGrid;
