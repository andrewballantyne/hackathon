import React from 'react';
import {
  DashboardCardContent,
  DashboardCardTitle,
  DashboardCardBody,
} from '../../../card-structure';
import { MarkdownCardData } from './types';

const MarkdownCardContent: React.FC<MarkdownCardData> = ({ title, description, markdown }) => (
  <DashboardCardContent>
    <DashboardCardTitle title={description}>{title}</DashboardCardTitle>
    <DashboardCardBody>{markdown}</DashboardCardBody>
  </DashboardCardContent>
);

export default MarkdownCardContent;
