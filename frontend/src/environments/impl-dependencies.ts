import {BooksRestServiceMock} from '@@core/services/books/books-rest.service.mock';
import {BooksRestServiceDpd} from '@@core/services/books/books-rest.service.dpd';
import {BooksRestServiceImpl} from '@@core/services/books/books-rest.service.impl';

export interface ImplDependencies {
  [key: string]: {
    'mock': Object;
    'dpd': Object;
    'prod': Object;
    'default': string;
  };
}

export const implDependencies: ImplDependencies = {
  BooksRestService: {
    'mock': BooksRestServiceMock,
    'dpd': BooksRestServiceDpd,
    'prod': BooksRestServiceImpl,
    'default': 'dpd'
  }
};
