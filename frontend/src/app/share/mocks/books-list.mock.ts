import {BookModel} from '@@share/models/book.model';

export const booksListMock: BookModel[] = [
  {
    'id': '1',
    'title': 'Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 3,
    'owner': {
      'id': '123',
      'username': 'Vasya',
      'password': 'Pupkin'
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
      'username': 'Petya',
      'password': 'Pupkin'
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
      'username': 'Vasya',
      'password': 'Pupkin'
    }
  }
];
