import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup-input',
  templateUrl: './signup-input.component.html',
  styleUrls: ['./signup-input.component.css']
})
export class SignupInputComponent implements OnInit {

  @Output() name = new EventEmitter<string>();
  @Output() lastName = new EventEmitter<string>();
  @Output() userName = new EventEmitter<string>();
  @Output() password = new EventEmitter<string>();
  @Output() passwordRep = new EventEmitter<string>();
  
  
  constructor() { }

  ngOnInit(): void {
  }


  inputName(name: string): void {
    this.name.emit(name);
  }

  inputLastName(lastName: string): void {
    this.lastName.emit(lastName);
  }

  inputUserName(userName: string): void {
    this.userName.emit(userName);
  }

  inputPassword(password: string): void {
    this.password.emit(password);
  }

  inputPasswordRep(passwordRep: string): void {
    this.passwordRep.emit(passwordRep);
  }

}
