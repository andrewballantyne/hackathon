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
        gridItem: { x: 0, y: 0, w: 4, h: 3 },
        type: 'core.markdown',
        data: {
          label: 'Metrics',
          description: 'See metrics',
          markdown: '## Metrics',
        },
      },

      {
        id: 'quota',
        gridItem: { x: 4, y: 0, w: 4, h: 2 },
        type: 'core.markdown',
        data: {
          label: 'Quota',
          description: 'Resource quotas',
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
        gridItem: { x: 0, y: 0, w: 4, h: 3 },
        type: 'core.markdown',
        data: {
          label: 'Team Event',
          description: 'Get the latest team event information',
          markdown: '## Testing 1 2 3 ...',
        },
      },

      {
        id: 'process',
        gridItem: { x: 4, y: 0, w: 4, h: 2 },
        type: 'core.markdown',
        data: {
          label: 'Process',
          description: 'Read about the business process.',
          markdown: '## Process documentation',
        },
      },

      {
        id: 'changeLog',
        gridItem: { x: 8, y: 0, w: 4, h: 1 },
        type: 'core.markdown',
        data: {
          label: 'Change Log',
          description: 'Read the change log for each release',
          markdown: '## Change Log',
        },
      },
    ],
  },
];
