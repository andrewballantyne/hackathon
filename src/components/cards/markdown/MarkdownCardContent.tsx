import React from 'react';
import { Converter } from 'showdown';
import { CardProps } from '../../../types';
import { DashboardCardContent, DashboardCardTitle, DashboardCardBody } from '../../card-structure';
import { MarkdownCardData } from './types';

const converter = new Converter({
  tables: true,
  openLinksInNewWindow: true,
  strikethrough: true,
});

const MarkdownCardContent: React.FC<CardProps<MarkdownCardData>> = ({
  data: { title, description, markdown },
}) => (
  <DashboardCardContent>
    <DashboardCardTitle title={description}>{title}</DashboardCardTitle>
    <DashboardCardBody style={{ overflow: 'auto' }}>
      <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(markdown) }} />
    </DashboardCardBody>
  </DashboardCardContent>
);

export default MarkdownCardContent;
