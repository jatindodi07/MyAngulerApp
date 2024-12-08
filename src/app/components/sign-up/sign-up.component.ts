import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule,NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
name:string=""
username:string=""
password:string=""
role:string=""
sm:string|undefined
em:string|undefined
constructor(private authService:AuthService){}

onSignUp(){
  console.log(this.role)
    this.authService.onSignUp({name:this.name,
      username:this.username,
      password:this.password,
    role:this.role})
      .subscribe({
      next: (data)=>{
        this.sm = 'Sign Up Success, Please login';
      },
      error: (err)=>{
        console.log(err)
        this.em = err.msg; 
    }
})
}
}
