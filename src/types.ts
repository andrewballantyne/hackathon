import * as React from 'react';

export type Layout = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type CardSettingsProps<D = {}> = {
  data: D;
  onChange: (data: any) => void;
};

export type CardProps<D = {}> = {
  data: D;
  dragging?: boolean;
  resizing?: boolean;
};

export type CardDefinition<D = any> = {
  label: string;
  id: string;
  settingsComponent: () => Promise<{ default: React.ComponentType<CardSettingsProps<D>> }>;
  contentComponent: () => Promise<{ default: React.ComponentType<CardProps<D>> }>;
  description: string;
  icon: string | React.ReactElement;
  images?: string[];
};

export type CardConfig<D = any> = {
  id: string;
  // the corresponding card ID of a CardDefinition
  type: string;
  frameless?: boolean;
  data: D;
};

export type DashboardTabConfig = {
  id: string;
  label: string;
  cards: CardConfig[];
  layout: Layout[];
  // defaults to 12
  cols?: number;
  readOnly?: boolean;
};

export type DashboardConfig = {
  tabs: DashboardTabConfig[];
  fullscreen?: {
    hideTabs?: boolean;
    cycle?: boolean;
    cycleDelay?: number;
  };
};
