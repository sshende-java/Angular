import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  randomCustomValue = 1;

  @Input({ required: true }) avatar!: string;     //Allows this component to accept input .this input property will be used in html like [avatar]
  @Input({ required: true }) id!: string;         //accept input
  @Input() name!: string;                         //accept input

  @Output() select = new EventEmitter();        //Emitting custom event




  get imagePath() {     //this is a property getter
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {     //method
    debugger;
    this.select.emit(this.id);    //u got this value from @Input now emit this value which clicked.
  }
}
