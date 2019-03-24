import {BookModel} from '@@books-page/models/book.model';

export const SuggestionsMock: {[key: string]: BookModel[]} = {
  suggestion1: [
    {
      'id': 1,
      'title': 'Java. Kompendium programisty. Wydanie X',
      'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
      'author': 'Herbert Schildt',
      'rating': 3
    }
  ],
  suggestion2: [
    {
      'id': 3,
      'title': 'Java. Kompendium programisty. Wydanie XXI',
      'description': 'Java. Kompendium programisty. Wydanie XXI. Bardzo dobra książka.',
      'author': 'Herbert Schildter',
      'rating': 4
    },
    {
      'id': 4,
      'title': 'Java. Kompendium programisty. Wydanie XXI',
      'description': 'Java. Kompendium programisty. Wydanie XXI. Bardzo dobra książka.',
      'author': 'Herbert Schildter',
      'rating': 4
    }
  ],
  suggestion3: [
    {
      'id': 3,
      'title': 'Java. Kompendium programisty. Wydanie XXI',
      'description': 'Java. Kompendium programisty. Wydanie XXI. Bardzo dobra książka.',
      'author': 'Herbert Schildter',
      'rating': 4
    }
  ]
};
