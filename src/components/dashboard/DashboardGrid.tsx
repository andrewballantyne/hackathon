import * as React from 'react';
import GridLayout, { WidthProvider } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Layout } from '../../types';
import DashboardContext from './DashboardContext';

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
}) => {
  const { isFullscreen } = React.useContext(DashboardContext);
  const editable = !readonly && !isFullscreen;

  // FIXME when exiting out of fullscreen mode, even though editable === true,
  // the Grid doesn't re-render correctly to become editable again
  return (
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
      isDraggable={editable}
      isResizable={editable}
    >
      {children}
    </GridLayoutWithWidth>
  );
};

export default DashboardGrid;
