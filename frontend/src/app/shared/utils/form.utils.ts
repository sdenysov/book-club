import {FormErrors} from '@@shared/models/form-errors';
import {ValidationError} from '@@shared/models/validation-error';
import {AbstractControl, FormGroup} from '@angular/forms';
import {CollectionUtils} from '@@shared/utils/collection.utils';

export class FormUtils {

  static setErrorsToForm(formErrors: FormErrors, form: FormGroup) {
    if (!formErrors) {
      return;
    }
    FormUtils.setValidationError(form, formErrors['$form']);
    Object.entries(form.controls)
      .filter(([name]) => name in formErrors)
      .forEach(([name, control]) => {
        FormUtils.setValidationError(control, formErrors[name]);
      });
  }

  static getFirstError(control: AbstractControl): ValidationError {
    const errorsProperties = Object.keys(control.errors);
    const errorKey = CollectionUtils.getFirstItem(errorsProperties);
    return {
      type: errorKey,
      params: control.errors[errorKey]
    };
  }

  private static setValidationError(control: AbstractControl, validationError: ValidationError) {
    const {type, params} = validationError;
    if (type) {
      control.setErrors({[type]: params || true});
    }
  }
}
