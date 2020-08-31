import {Component} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<div class="alert alert-warning">{{ message }}</div>'
})
export class WarningAlertComponent {
  message = 'Warning Message';
}
