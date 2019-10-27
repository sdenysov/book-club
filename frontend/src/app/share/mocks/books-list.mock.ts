import {Book} from '@@share/models/book';

export const booksListMock: Book[] = [
  {
    'id': '1',
    'title': 'Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 3,
    'owner': {
      'id': '123',
      'username': 'Vasya'
    }
  },
  {
    'id': '2',
    'title': 'Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 0,
    'owner': {
      'id': '1234',
      'username': 'Petya'
    }
  },
  {
    'id': '3',
    'title': 'Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 1,
    'owner': {
      'id': '123',
      'username': 'Vasya'
    }
  }
];
