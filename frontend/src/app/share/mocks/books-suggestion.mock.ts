import {BookModel} from '@@share/models/book.model';

export const SuggestionsMock: {[key: string]: BookModel[]} = {
  suggestion1: [
    {
      'id': '1',
      'title': 'Java. Kompendium programisty. Wydanie X',
      'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
      'author': 'Herbert Schildt',
      'rating': 3,
      'owner': {
        'id': '1233',
        'username': 'Volodya'
      }
    }
  ],
  suggestion2: [
    {
      'id': '3',
      'title': 'Java. Kompendium programisty. Wydanie XXI',
      'description': 'Java. Kompendium programisty. Wydanie XXI. Bardzo dobra książka.',
      'author': 'Herbert Schildter',
      'rating': 4,
      'owner': {
        'id': '1233',
        'username': 'Volodya'
      }
    },
    {
      'id': '4',
      'title': 'Java. Kompendium programisty. Wydanie XXI',
      'description': 'Java. Kompendium programisty. Wydanie XXI. Bardzo dobra książka.',
      'author': 'Herbert Schildter',
      'rating': 4,
      'owner': {
        'id': '123',
        'username': 'Vasya'
      }
    }
  ],
  suggestion3: [
    {
      'id': '3',
      'title': 'Java. Kompendium programisty. Wydanie XXI',
      'description': 'Java. Kompendium programisty. Wydanie XXI. Bardzo dobra książka.',
      'author': 'Herbert Schildter',
      'rating': 4,
      'owner': {
        'id': '123',
        'username': 'Vasya'
      }
    }
  ]
};
