import React from 'react';
import { CardConfig } from '../../types';
import CardEditorModal from './CardEditorModal';

type Props = {
  config: CardConfig;
  readonly?: boolean;
  children: React.ReactNode;
  onCardChange?: (config: CardConfig) => void;
};

const EditableWrapper: React.FC<Props> = ({ config, readonly, onCardChange, children }) => {
  const [edit, setEdit] = React.useState(false);
  return (
    <>
      <div
        style={{ height: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}
        // TODO this is a simple solution to enter edit mode for now
        onDoubleClick={!readonly ? () => setEdit(true) : undefined}
      >
        {children}
      </div>
      {edit ? (
        <CardEditorModal
          isOpen
          config={config}
          onClose={() => setEdit(false)}
          onSave={(c) => onCardChange && onCardChange(c)}
        />
      ) : undefined}
    </>
  );
};

export default EditableWrapper;
