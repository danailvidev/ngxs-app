import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { AppState } from './shared/app.state';
import { SetUsername } from './shared/app.actions';
import { Navigate } from './shared/router.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @Select(state => state.app) app$;

  constructor(private store: Store) {
  }

  clickHandler(username) {
    this.store.dispatch([
      new SetUsername(username),
      new Navigate('salad/order')
    ]);
  }
}
