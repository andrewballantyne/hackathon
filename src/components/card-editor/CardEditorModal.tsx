import { Button, Modal, ModalVariant } from '@patternfly/react-core';
import * as React from 'react';
import { CardConfig } from '../../types';
import { useCardDefinition } from '../../utils/card-utils';
import CardEditor from './CardEditor';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (config: CardConfig) => void;
  config: CardConfig;
};
const CardEditorModal: React.FC<Props> = ({ config, isOpen, onClose, onSave }) => {
  const def = useCardDefinition(config.type);
  const [newConfig, setConfig] = React.useState(config);
  return (
    <Modal
      variant={ModalVariant.large}
      title={def.label}
      isOpen={isOpen}
      onClose={onClose}
      showClose={false}
      actions={[
        <Button
          key="save"
          variant="primary"
          onClick={() => {
            onSave(newConfig);
            onClose();
          }}
        >
          Save
        </Button>,
        <Button key="cancel" variant="link" onClick={() => onClose()}>
          Cancel
        </Button>,
      ]}
    >
      <CardEditor onChange={setConfig} config={newConfig} />
    </Modal>
  );
};

export default CardEditorModal;
