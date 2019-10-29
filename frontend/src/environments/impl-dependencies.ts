import {AuthRestServiceDpd} from '@@auth/services/rest/auth-rest.service.dpd';
import {AuthRestServiceImpl} from '@@auth/services/rest/auth-rest.service.impl';
import {AuthRestServiceMock} from '@@auth/services/rest/auth-rest.service.mock';
import {BooksRestServiceDpd} from '@@core/services/books/books-rest.service.dpd';
import {BooksRestServiceImpl} from '@@core/services/books/books-rest.service.impl';
import {BooksRestServiceMock} from '@@core/services/books/books-rest.service.mock';

export interface IEnv {
  dev: boolean;
  mock: boolean;
  dpd: boolean;
  production: boolean;
}

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
  },
  AuthRestService: {
    'mock': AuthRestServiceMock,
    'dpd': AuthRestServiceDpd,
    'prod': AuthRestServiceImpl,
    'default': 'dpd'
  }
};
