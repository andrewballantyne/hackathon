export type GridItem = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export type CardEditProps<D = {}> = {
  settings: D;
  onChange: (key: string, value: any) => void;
};

export type CardDefinition<D = {}> = {
  id: string;
  editComponent: Promise<{ default: React.ComponentType<CardEditProps<D>> }>;
  contentComponent: Promise<{ default: React.ComponentType<D> }>;
};

export type CatalogDefinition = CardDefinition & {
  label: string;
  description: string;
  icon: string;
  images: string[];
};

export type CardConfig<D = {}> = {
  // the corresponding card ID of a CardDefinition
  type: string;
  label: string;
  description?: string;
  color?: string | 'transparent';
  gridItem: GridItem;
  data: D;
};

export type DashboardConfig = {
  label: string;
  widgets: CardConfig[];
  // defaults to 12
  cols?: number;
  readOnly?: boolean;
};

export type Config = {
  dashboards: DashboardConfig[];
  fullscreen?: {
    hideTabs?: boolean;
    cycle?: boolean;
    cycleDelay?: number;
  };
};
