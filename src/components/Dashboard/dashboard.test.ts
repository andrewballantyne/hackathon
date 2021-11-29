import { DashboardConfig } from '../../types';

import definitions from './cards/definitions';

export const cardDefinitions = [...definitions];

export const dashboards: DashboardConfig[] = [
  {
    id: 'overviewTab',
    label: 'Overview',
    cards: [
      {
        id: 'metrics',
        label: 'Metrics',
        description: 'See metrics',
        gridItem: { x: 0, y: 0, w: 4, h: 3 },
        type: 'core.markdown',
        data: {
          markdown: '## Metrics',
        },
      },

      {
        id: 'quota',
        label: 'Quota',
        description: 'Resource quotas',
        gridItem: { x: 4, y: 0, w: 4, h: 2 },
        type: 'core.markdown',
        data: {
          markdown: '## Quota',
        },
      },
    ],
  },
  {
    id: 'teamTab',
    label: 'Team',
    cards: [
      {
        id: 'team',
        label: 'Team Event',
        description: 'Get the latest team event information',
        gridItem: { x: 0, y: 0, w: 4, h: 3 },
        type: 'core.markdown',
        data: {
          markdown: '## Testing 1 2 3 ...',
        },
      },

      {
        id: 'process',
        label: 'Process',
        description: 'Read about the business process.',
        gridItem: { x: 4, y: 0, w: 4, h: 2 },
        type: 'core.markdown',
        data: {
          markdown: '## Process documentation',
        },
      },

      {
        id: 'changeLog',
        label: 'Change Log',
        description: 'Read the change log for each release',
        gridItem: { x: 8, y: 0, w: 4, h: 1 },
        type: 'core.markdown',
        data: {
          markdown: '## Change Log',
        },
      },
    ],
  },
];
