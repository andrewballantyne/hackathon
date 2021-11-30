import * as React from 'react';
import { CardDefinition } from '../../types';
import DashboardContext from './DashboardContext';

import './Dashboard.scss';
import { useFullscreen } from '../../utils/fullscreen';

export type DashboardAPI = {
  fullscreenToggle(): void;
};

type Props = {
  cardDefinitions: CardDefinition[];
  children: React.ReactNode;
};

const Dashboard: React.ForwardRefRenderFunction<DashboardAPI, Props> = (
  { cardDefinitions, children },
  ref,
) => {
  const [isFullscreen, fullscreenRef, fullscreenToggle] = useFullscreen<HTMLDivElement>();

  React.useImperativeHandle(ref, () => ({
    fullscreenToggle,
  }));

  const idToCardDefinition = React.useMemo(
    () =>
      cardDefinitions.reduce(
        (acc, v) => (acc[v.id] = v) && acc,
        {} as { [id: string]: CardDefinition },
      ),
    [cardDefinitions],
  );

  return (
    <div className="pf-dashboard" ref={fullscreenRef}>
      <DashboardContext.Provider value={{ idToCardDefinition, isFullscreen }}>
        {children}
      </DashboardContext.Provider>
    </div>
  );
};

export default React.forwardRef(Dashboard);
