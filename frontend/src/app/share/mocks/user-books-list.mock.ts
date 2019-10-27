import {Book} from '@@share/models/book';

const owner2BookList = [
  {
    'id': '2',
    'title': '[owner 2] Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 0,
    'owner': {
      'id': '2',
      'username': 'Vasya',
      'password': 'Pupkin'
    }
  },
  {
    'id': '3',
    'title': '[owner 2] Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 1,
    'owner': {
      'id': '2',
      'username': 'Vasya',
      'password': 'Pupkin'
    }
  }
];

const owner3BookList = [
  {
    'id': '7',
    'title': '[owner 3] Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 0,
    'owner': {
      'id': '3',
      'username': 'Volodya',
      'password': 'Pupkin'
    }
  },
  {
    'id': '8',
    'title': '[owner 3] Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 1,
    'owner': {
      'id': '3',
      'username': 'Volodya',
      'password': 'Pupkin'
    }
  },
  {
    'id': '9',
    'title': '[owner 3] Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 1,
    'owner': {
      'id': '3',
      'username': 'Volodya',
      'password': 'Pupkin'
    }
  }
];

export const profileBooksMock: { [key: string]: Book[] } = {
  '2': owner2BookList,
  '3': owner3BookList
};
