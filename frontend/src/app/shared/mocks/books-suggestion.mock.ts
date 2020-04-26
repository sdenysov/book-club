import {IBookSearchItem} from '@@navigation/models/book-search-item';

export const SuggestionsMock: { [key: string]: IBookSearchItem[] } = {
  suggestion1: [
    {
      'id': '1',
      'title': 'Java. Kompendium programisty. Wydanie X'
    },
    {
      'id': '2',
      'title': 'Java. Kompendium programisty. Wydanie XXI'
    },
    {
      'id': '3',
      'title': 'Java. Kompendium programisty. Wydanie XXI'
    }
  ],
  suggestion2: [
    {
      'id': '1',
      'title': 'Java. Kompendium programisty. Wydanie XXI'
    },
    {
      'id': '2',
      'title': 'Java. Kompendium programisty. Wydanie XXI'
    }
  ],
  suggestion3: [
    {
      'id': '2',
      'title': 'Java. Kompendium programisty. Wydanie XXI'
    }
  ]
};
