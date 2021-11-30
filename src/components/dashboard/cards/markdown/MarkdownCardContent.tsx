import React from 'react';
import { DashboardCard, DashboardCardTitle, DashboardCardBody } from '../../../card-structure';
import { MarkdownCardData } from './types';

const MarkdownCardContent: React.FC<MarkdownCardData> = ({ title, description, markdown }) => (
  // TODO cards should be rendering custom components and not a PF Card
  <DashboardCard>
    <DashboardCardTitle title={description}>{title}</DashboardCardTitle>
    <DashboardCardBody>{markdown}</DashboardCardBody>
  </DashboardCard>
);

export default MarkdownCardContent;
