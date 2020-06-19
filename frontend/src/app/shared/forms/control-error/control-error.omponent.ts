import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormUtils} from '@@shared/utils/form.utils';
import {ValidationError} from '@@shared/models/validation-error';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-control-error',
  templateUrl: 'control-error.component.html',
})
export class ControlErrorComponent implements OnInit {

  @Input() control: FormControl;

  constructor(private translateService: TranslateService) { }

  errorMessage(): string {
    const error: ValidationError = FormUtils.getFirstError(this.control);
    return this.translateService.instant(`validation.${error.type}`, error.params);
  }

  ngOnInit() {}
}
