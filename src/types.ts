import * as React from 'react';

export type Layout = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type CardEditProps<D = {}> = {
  data: D;
  onChange: (key: string, value: any) => void;
};

export type CardDefinition<D = any> = {
  id: string;
  editComponent: () => Promise<{ default: React.ComponentType<CardEditProps<D>> }>;
  contentComponent: () => Promise<{ default: React.ComponentType<D> }>;
};

export type CatalogCardDefinition<D = {}> = CardDefinition<D> & {
  label: string;
  description: string;
  icon: string;
  images: string[];
};

export type CardConfig<D = any> = {
  id: string;
  // the corresponding card ID of a CardDefinition
  type: string;
  frameless?: boolean;
  data: D;
};

export type DashboardConfig = {
  id: string;
  label: string;
  cards: CardConfig[];
  layout: Layout[];
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
