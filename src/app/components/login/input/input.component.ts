import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() onUsernameInput = new EventEmitter<any>();
  @Output() onPasswordInput = new EventEmitter<any>();
  username: string;
  password: string;

  constructor( ) {
    this.username = '';
    this.password = '';
   }

  ngOnInit(): void {
  }


  public showPassword: boolean = false;
  
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  inputUsername(value: string) {
    this.onUsernameInput.emit(value);
  }

  inputPassword(value: string) {
    this.onPasswordInput.emit(value);
  }

}
