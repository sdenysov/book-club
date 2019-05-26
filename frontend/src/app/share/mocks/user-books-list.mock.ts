import {BookModel} from '@@share/models/book.model';

const owner2BookList = [
  {
    'id': 2,
    'title': '[owner_id 2] Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 0,
    'owner_id': 2
  },
  {
    'id': 3,
    'title': '[owner_id 2] Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 1,
    'owner_id': 2
  }
];

const owner3BookList = [
  {
    'id': 7,
    'title': '[owner_id 3] Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 0,
    'owner_id': 3
  },
  {
    'id': 8,
    'title': '[owner_id 3] Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 1,
    'owner_id': 3
  },
  {
    'id': 9,
    'title': '[owner_id 3] Java. Kompendium programisty. Wydanie X',
    'description': 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
    'author': 'Herbert Schildt',
    'rating': 1,
    'owner_id': 3
  }
];

export const userBooksMock: { [key: string]: BookModel[] } = {
  '2': owner2BookList,
  '3': owner3BookList
};
