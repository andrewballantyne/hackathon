import { Button, Modal, ModalVariant, Title } from '@patternfly/react-core';
import * as React from 'react';
import DefinitionTitle from '../common/DefinitionTitle';
import { CardConfig } from '../../types';
import { useCardDefinition } from '../../utils/card-utils';
import DashboardContext from '../../utils/DashboardContext';
import CardEditor from './CardEditor';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (config: CardConfig, tabId: string) => void;
  cardConfig: CardConfig;
};
const CardEditorModal: React.FC<Props> = ({ cardConfig, isOpen, onClose, onSave }) => {
  const { dashboard } = React.useContext(DashboardContext);
  // TODO if no tabs exist, support adding a dashboard tab
  const tabId =
    dashboard.tabs.find((tab) => tab.cards.find((card) => card.id === cardConfig.id))?.id ??
    dashboard.tabs[0]?.id ??
    '';
  const def = useCardDefinition(cardConfig.type);
  const [saveState, setSaveState] = React.useState<{
    cardConfig: CardConfig;
    tabId: string;
  }>({ cardConfig, tabId });

  return (
    <Modal
      variant={ModalVariant.large}
      header={<DefinitionTitle definition={def} size="2xl" />}
      isOpen={isOpen}
      onClose={onClose}
      showClose={false}
      actions={[
        <Button
          key="save"
          variant="primary"
          onClick={() => {
            onSave(saveState.cardConfig, saveState.tabId);
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
      <CardEditor
        onChange={(cardConfig, tabId) =>
          setSaveState({
            cardConfig,
            tabId,
          })
        }
        config={saveState.cardConfig}
        tabId={saveState.tabId}
      />
    </Modal>
  );
};

export default CardEditorModal;
