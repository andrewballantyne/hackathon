import { CatalogCardDefinition } from '../../types';
import { iframeDefinition } from './iframe';
import { markdownDefinition } from './markdown';

const definitions: CatalogCardDefinition<any>[] = [markdownDefinition, iframeDefinition];

export default definitions;
