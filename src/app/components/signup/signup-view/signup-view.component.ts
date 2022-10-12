import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup-view',
  templateUrl: './signup-view.component.html',
  styleUrls: ['./signup-view.component.css']
})
export class SignupViewComponent implements OnInit {

  user: User = {
    id: 0,
    name: '',
    lastName: '',
    username: '',
    password: ''
  };
  passRep: string = '';
  constructor() { }

  ngOnInit(): void {

  }

  onNameInput(value: string) {
    this.user.name = value;
  }

  onLastNameInput(value: string) {
    this.user.lastName = value;
  }

  onUserNameInput(value: string) {
    this.user.username = value;
  }

  onPasswordInput(value: string) {
    this.user.password = value;
  }

  onPasswordRepInput(value: string) {
    this.passRep = value;
  }


}
