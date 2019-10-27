import {IFormErrors} from '@@share/models/i-form-errors';
import {IValidationError} from '@@share/models/i-validation-error';
import {AbstractControl, FormGroup} from '@angular/forms';

export class FormUtils {

  static setErrorsToForm(formErrors: IFormErrors, form: FormGroup) {
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

  private static setValidationError(control: AbstractControl, validationError: IValidationError) {
    const {type, params} = validationError;
    if (type) {
      control.setErrors({[type]: params || true});
    }
  }
}
