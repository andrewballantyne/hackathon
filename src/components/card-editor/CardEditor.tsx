import * as React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelContent,
  Form,
} from '@patternfly/react-core';
import { CardConfig } from '../../types';
import CardEditorPreview from './CardEditorPreview';
import CardEditorSettings from './CardEditorSettings';
import CardEditorDefaultSettings from './CardEditorDefaultSettings';

import './CardEditor.scss';

type Props = {
  onChange: (config: CardConfig, tabId: string) => void;
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
            <Form>
              <CardEditorDefaultSettings
                config={config}
                // TODO store tabId in state
                onTabChange={(tabId) => onChange(config, tabId)}
                onChange={(c) => onChange(c, '')}
              />
              <CardEditorSettings
                config={config}
                // TODO get tabId from state
                onChange={(c) => onChange(c, '')}
              />
            </Form>
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
