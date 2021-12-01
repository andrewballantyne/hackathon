import React from 'react';
import { IFrameCardData } from '.';
import { CardProps } from '../../../types';

const MarkdownCardContent: React.FC<CardProps<IFrameCardData>> = ({ data: { title, url } }) =>
  url ? (
    <iframe style={{ flexGrow: 1, height: '100%', border: 'none' }} src={url} title={title} />
  ) : (
    <span>Please supply a URL.</span>
  );

export default MarkdownCardContent;
