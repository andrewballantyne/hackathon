import * as React from 'react';
import { CardDefinition } from '../../types';
import OldDashboardContext from '../../utils/OldDashboardContext';

import './Dashboard.scss';
import { useFullscreen } from '../../utils/fullscreen';

export type DashboardFindNewNameAPI = {
  fullscreenToggle(): void;
};

type Props = {
  cardDefinitions: CardDefinition[];
  children: React.ReactNode;
};

const Dashboard: React.ForwardRefRenderFunction<DashboardFindNewNameAPI, Props> = (
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
      <OldDashboardContext.Provider value={{ idToCardDefinition, isFullscreen }}>
        {children}
      </OldDashboardContext.Provider>
    </div>
  );
};

export default React.forwardRef(Dashboard);
