import * as React from 'react';
import { MarkdownCardData } from './types';

const MarkdownCardContent: React.FC<MarkdownCardData> = ({ markdown }) => <span>{markdown}</span>;

export default MarkdownCardContent;
