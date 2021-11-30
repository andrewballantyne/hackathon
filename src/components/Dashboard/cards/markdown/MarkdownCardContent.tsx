import React from 'react';
import { Card, CardTitle, CardBody } from '@patternfly/react-core';
import { MarkdownCardData } from './types';

const MarkdownCardContent: React.FC<MarkdownCardData> = ({ title, description, markdown }) => (
  // TODO cards should be rendering custom components and not a PF Card
  <Card>
    <CardTitle title={description}>{title}</CardTitle>
    <CardBody>{markdown}</CardBody>
  </Card>
);

export default MarkdownCardContent;
