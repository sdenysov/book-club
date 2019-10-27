import {ValidationError} from '@@share/models/validation-error';

export interface FormErrors {
  $form: ValidationError;
  [key: string]: any;
}
