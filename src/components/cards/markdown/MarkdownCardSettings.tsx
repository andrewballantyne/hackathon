import { Form, FormGroup, TextArea, TextInput } from '@patternfly/react-core';
import * as React from 'react';
import { CardSettingsProps } from '../../../types';
import { MarkdownCardData } from './types';

const MarkdownCardSettings: React.FC<CardSettingsProps<MarkdownCardData>> = ({
  onChange,
  data,
}) => (
  <Form isHorizontal>
    <FormGroup label="Title" isRequired fieldId="markdown-card-title">
      <TextInput
        value={data.title}
        isRequired
        type="text"
        id="markdown-card-title"
        name="title"
        onChange={(title) => onChange({ ...data, title })}
      />
    </FormGroup>
    <FormGroup label="Markdown" isRequired fieldId="markdown-card-markdown">
      <TextArea
        value={data.markdown}
        isRequired
        name="horizontal-form-exp"
        id="markdown-card-markdown"
        onChange={(markdown) => onChange({ ...data, markdown })}
      />
    </FormGroup>
  </Form>
);

export default MarkdownCardSettings;