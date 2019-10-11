import {FormErrors} from '@@share/models/form-errors';
import {ValidationError} from '@@share/models/validation-error';
import {AbstractControl, FormGroup} from '@angular/forms';

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

  private static setValidationError(control: AbstractControl, validationError: ValidationError) {
    const {type, params} = validationError;
    if (type) {
      control.setErrors({[type]: params || true});
    }
  }
}
