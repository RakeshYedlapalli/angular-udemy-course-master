import { Component, EventEmitter, Input, OnInit, Output, computed, output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './interfaces/User';

let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user!: User;
  @Input({required: true}) isUserSelected!: boolean;

  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) id!: string;

  @Output() selectUser = new EventEmitter<string>();

  //alternative to EventEmitter is output from angular core using signal
  selectUser1 = output<string>();



  get getImage() {
    // console.log("Hellooooooo"+ this.avatar);
    
    return "assets/users/"+this.user.avatar;
  }
  

  onSelectUser() {
    console.log("Selected user id->", this.user.id)
    this.selectUser.emit(this.user.id)
  }

}
