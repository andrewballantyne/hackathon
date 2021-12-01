import { DashboardConfig } from '../types';

import definitions from '../components/cards/definitions';

export const cardDefinitions = [...definitions];

export const dashboards: DashboardConfig[] = [
  {
    id: 'overviewTab',
    label: 'Overview',
    layout: [
      { i: 'metrics', x: 0, y: 0, w: 4, h: 3 },
      { i: 'quota', x: 4, y: 0, w: 4, h: 2 },
    ],
    cards: [
      {
        id: 'metrics',
        type: 'core.markdown',
        frameless: true,
        data: {
          title: 'Metrics',
          description: 'See metrics',
          markdown: '## Metrics markdown',
        },
      },

      {
        id: 'quota',
        type: 'core.markdown',
        data: {
          title: 'Quota',
          description: 'Resource quotas',
          markdown: '## Quota markdown',
        },
      },
    ],
  },
  {
    id: 'teamTab',
    label: 'Team',
    layout: [
      { i: 'team', x: 0, y: 0, w: 4, h: 3 },
      { i: 'process', x: 4, y: 0, w: 4, h: 2 },
      { i: 'changeLog', x: 8, y: 0, w: 4, h: 1 },
    ],
    cards: [
      {
        id: 'team',
        type: 'core.markdown',
        data: {
          title: 'Team Event',
          description: 'Get the latest team event information',
          markdown: '## Team event markdown',
        },
      },

      {
        id: 'process',
        type: 'core.markdown',
        data: {
          title: 'Process',
          description: 'Read about the business process.',
          markdown: '## Process documentation markdown',
        },
      },

      {
        id: 'changeLog',
        type: 'core.markdown',
        data: {
          title: 'Change Log',
          description: 'Read the change log for each release',
          markdown: '## Change Log markdown',
        },
      },
    ],
  },
];
