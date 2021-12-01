import React from 'react';
import { Converter } from 'showdown';
import { DashboardCardContent, DashboardCardTitle, DashboardCardBody } from '../../card-structure';
import { MarkdownCardData } from './types';

const converter = new Converter({
  tables: true,
  openLinksInNewWindow: true,
  strikethrough: true,
});

const MarkdownCardContent: React.FC<MarkdownCardData> = ({ title, description, markdown }) => (
  <DashboardCardContent>
    <DashboardCardTitle title={description}>{title}</DashboardCardTitle>
    <DashboardCardBody>
      <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(markdown) }} />
    </DashboardCardBody>
  </DashboardCardContent>
);

export default MarkdownCardContent;
