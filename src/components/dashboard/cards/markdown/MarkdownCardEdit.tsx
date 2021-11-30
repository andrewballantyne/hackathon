import * as React from 'react';
import { CardEditProps } from '../../../../types';
import { MarkdownCardData } from './types';

const MarkdownCardEdit: React.FC<CardEditProps<MarkdownCardData>> = ({
  onChange,
  data: { markdown },
}) => <span>{markdown}</span>;

export default MarkdownCardEdit;
