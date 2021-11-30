import React from 'react';
import { DashboardCardTitle, DashboardCardBody } from '../../../card-structure';
import { MarkdownCardData } from './types';

const MarkdownCardContent: React.FC<MarkdownCardData> = ({ title, description, markdown }) => (
  <>
    <DashboardCardTitle title={description}>{title}</DashboardCardTitle>
    <DashboardCardBody>{markdown}</DashboardCardBody>
  </>
);

export default MarkdownCardContent;
