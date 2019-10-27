import {IValidationError} from '@@share/models/i-validation-error';

export interface IFormErrors {
  $form: IValidationError;
  [key: string]: any;
}
