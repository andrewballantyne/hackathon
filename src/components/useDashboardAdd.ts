import { DashboardContextProps } from '../utils/DashboardContext';
import { CardConfig } from '../types';

const useDashboardAdd = (
  editCard: DashboardContextProps['editCard'],
): DashboardContextProps['addCard'] => {
  return (cardType, cardDefaults) => {
    let newConfig: CardConfig;
    if (cardDefaults) {
      newConfig = cardDefaults;
    } else {
      let newData = {};

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
