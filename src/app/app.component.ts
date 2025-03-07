import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";

import { DUMMY_USERS } from './dummy-users';

@Component({    //type decorator
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  onSelectCustomEvent(id : string){
    debugger;
    console.log('User selected with id : '+id );
  }
}
