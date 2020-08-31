import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  active = false;

  getColor() {
    return this.active ? 'green' : 'red';
  }
}
