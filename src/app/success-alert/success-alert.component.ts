import {Component} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<div class="alert alert-success">{{ message }}</div>'
})
export class SuccessAlertComponent {
  message = 'Success Message';
}
