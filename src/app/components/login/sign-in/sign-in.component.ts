import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @Input() username: string = '';
  @Input() password: string = '';
  
  constructor(public loginService: LoginService, private router: Router) { }


  ngOnInit(): void {
  }

  signIn() {

    if(this.loginService.login(this.username, this.password)) {
      this.router.navigate(['/cards']);
    }
    else {
      alert("Usuario o contraseña incorrectos");    }
  }

}
