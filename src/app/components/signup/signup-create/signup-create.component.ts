import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup-create',
  templateUrl: './signup-create.component.html',
  styleUrls: ['./signup-create.component.css']
})
export class SignupCreateComponent implements OnInit {
  @Input() user!: User;
  @Input() passRep: string = '';
  constructor(private signUpService: SignupService,private router: Router) { }

  ngOnInit(): void {
  }

  signUp(): void {
    if(this.user.password != this.passRep) {
      alert('Las contraseñas no coinciden');
    }
    else {
      if(this.signUpService.signUp(this.user)) {
        this.router.navigate(['/cards']);
      }
      else {
        alert("No se pudo crear el usuario");    
      }
    
    }
  }

}
