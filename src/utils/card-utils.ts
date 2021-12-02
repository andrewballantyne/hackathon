import * as React from 'react';
import DashboardContext from './DashboardContext';
import { CardDefinition, CardProps, CardSettingsProps } from '../types';

export const useCardDefinition = (id: string): CardDefinition => {
  const { definitions } = React.useContext(DashboardContext);
  const def = definitions.find((d) => d.id === id);
  // TODO what happens if def is undefined
  if (!def) {
    throw new Error();
  }
  return def;
};

const factory = <T extends any>(
  get: (def: CardDefinition) => () => Promise<{ default: React.ComponentType<T> }>,
) => {
  const useCardComponentLoader = (id: string) => {
    const def = useCardDefinition(id);

    const loader = get(def);
    return React.useMemo(() => React.memo(React.lazy(loader)), [loader]);
  };
  return useCardComponentLoader;
};

export const useCardContentComponent = factory<CardProps>(
  (def: CardDefinition) => def.contentComponent,
);

export const useCardSettingsComponent = factory<CardSettingsProps>(
  (def: CardDefinition) => def.settingsComponent,
);
