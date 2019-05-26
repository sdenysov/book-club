import {BookModel} from '@@share/models/book.model';

export const SuggestionsMock: {[key: string]: BookModel[]} = {
  suggestion1: [
    {
      'id': 1,
      'title': 'Java. Kompendium programisty. Wydanie X',
      'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
      'author': 'Herbert Schildt',
      'rating': 3,
      'owner_id': 3
    }
  ],
  suggestion2: [
    {
      'id': 3,
      'title': 'Java. Kompendium programisty. Wydanie XXI',
      'description': 'Java. Kompendium programisty. Wydanie XXI. Bardzo dobra książka.',
      'author': 'Herbert Schildter',
      'rating': 4,
      'owner_id': 2
    },
    {
      'id': 4,
      'title': 'Java. Kompendium programisty. Wydanie XXI',
      'description': 'Java. Kompendium programisty. Wydanie XXI. Bardzo dobra książka.',
      'author': 'Herbert Schildter',
      'rating': 4,
      'owner_id': 3
    }
  ],
  suggestion3: [
    {
      'id': 3,
      'title': 'Java. Kompendium programisty. Wydanie XXI',
      'description': 'Java. Kompendium programisty. Wydanie XXI. Bardzo dobra książka.',
      'author': 'Herbert Schildter',
      'rating': 4,
      'owner_id': 1
    }
  ]
};
