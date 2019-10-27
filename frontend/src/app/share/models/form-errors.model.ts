import {IValidationError} from '@@share/models/validation-error.model';

export interface IFormErrors {
  $form: IValidationError;
  [key: string]: any;
}
