import { DashboardContextProps } from '../utils/DashboardContext';
import { CardConfig } from '../types';
import { MarkdownCardData } from './cards/markdown';
import { CardType } from './cards/types';
import { IFrameCardData } from './cards/iframe';

const useDashboardAdd = (
  editCard: DashboardContextProps['editCard'],
): DashboardContextProps['addCard'] => {
  return (cardType, cardDefaults) => {
    let newConfig: CardConfig;
    if (cardDefaults) {
      newConfig = cardDefaults;
    } else {
      let newData = {};
      switch (cardType) {
        case CardType.MARKDOWN:
          newData = {
            title: 'Markdown Test',
            description: 'some other test',
            markdown: '### big test',
          } as MarkdownCardData;
          break;
        case CardType.IFRAME:
          newData = {
            title: 'IFrame Test',
            url: 'https://www.redhat.com',
          } as IFrameCardData;
          break;
        default:
          // TODO: Create default for each type
          throw Error(`Cannot create card config without defaults, unsupported type ${cardType}`);
      }

      newConfig = {
        id: 'something-random', // TODO: Gen ID
        type: cardType,
        data: newData,
      };
    }

    console.debug('new config', newConfig);
    editCard(newConfig);
  };
};

export default useDashboardAdd;
