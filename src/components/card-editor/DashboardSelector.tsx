import * as React from 'react';
import { FormGroup, Select, SelectOption } from '@patternfly/react-core';
import DashboardContext from '../../utils/DashboardContext';

type Props = {
  tabId: string;
  onChange: (tabId: string) => void;
};

const DashboardSelector: React.FC<Props> = ({ tabId, onChange }) => {
  const [isOpen, setOpen] = React.useState(false);
  const { definitions, dashboard } = React.useContext(DashboardContext);

  // TODO add support to create a new dashboard
  return dashboard.tabs ? (
    <FormGroup label="Dashboard Tab" fieldId="core.config-dashboard-tab">
      <Select
        id="core.config-dashboard-tab"
        label="Dashboard Tab"
        selections={tabId}
        isOpen={isOpen}
        onToggle={setOpen}
        onSelect={(e, selection) => onChange(tabId)}
      >
        {definitions.map((def) => (
          <SelectOption key={def.id} value={def.id}>
            {def.label}
          </SelectOption>
        ))}
      </Select>
    </FormGroup>
  ) : null;
};

export default DashboardSelector;
