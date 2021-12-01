import {
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelContent,
} from '@patternfly/react-core';
import * as React from 'react';
import { CardConfig } from '../../types';
import CardEditorPreview from './CardEditorPreview';
import CardEditorSettings from './CardEditorSettings';

import './CardEditor.scss';

type Props = {
  onChange: (config: CardConfig) => void;
  config: CardConfig;
};

const CardEditor: React.FC<Props> = ({ config, onChange }) => (
  <Drawer isExpanded className="catalog" isInline>
    <DrawerContent
      panelContent={
        <DrawerPanelContent
          isResizable
          id="right-resize-panel"
          defaultSize={'500px'}
          minSize={'300px'}
        >
          <DrawerHead>
            <CardEditorSettings config={config} onChange={onChange} />
          </DrawerHead>
        </DrawerPanelContent>
      }
    >
      <DrawerContentBody>
        <div className="pf-dashboard-card-editor__preview">
          <CardEditorPreview config={config} />
        </div>
      </DrawerContentBody>
    </DrawerContent>
  </Drawer>
);

export default CardEditor;
