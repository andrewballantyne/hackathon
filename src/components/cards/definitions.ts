import { CardDefinition } from '../../types';
import { iframeDefinition } from './iframe';
import { markdownDefinition } from './markdown';

const definitions: CardDefinition<any>[] = [markdownDefinition, iframeDefinition];

export default definitions;
