import {ValidationError} from '@@shared/models/validation-error';

export interface FormErrors {
  $form: ValidationError;
  [key: string]: any;
}
