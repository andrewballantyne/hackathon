import * as React from 'react';
import { Checkbox, FormGroup } from '@patternfly/react-core';
import { CardConfig } from '../../types';

type Props = {
  config: CardConfig;
  onChange: (config: CardConfig) => void;
  onTabChange: (id: string) => void;
};

const CardEditorDefaultSettings: React.FC<Props> = ({ onChange, config }) => (
  // TODO render a dropdown for the tab ID

  <FormGroup fieldId="core.config-frameless">
    <Checkbox
      id="core.config-frameless"
      label="Frameless"
      isChecked={config.frameless}
      // TODO pass in dashboard ID
      onChange={(frameless) => onChange({ ...config, frameless })}
    />
  </FormGroup>
);

export default CardEditorDefaultSettings;
