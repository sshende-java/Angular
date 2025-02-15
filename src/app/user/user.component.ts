import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users'

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {    //this is a property getter
    return 'assets/users/' + this.selectedUser.avatar
  }

  onSelectUser(){     //method
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    console.log("clicked!");
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
