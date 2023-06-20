import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  firebaseErrorMessage: string;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.firebaseErrorMessage = '';
  }

  submit() {
    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
      if (result == null) {
        this.router.navigate(['/panel']);
      }
      else if (result.isValid == false) {
        this.firebaseErrorMessage = result.message;
      }
    });
  }

  public checkValidation(inputName: string){
    if(this.loginForm.get(inputName)?.invalid && (this.loginForm.get(inputName)?.dirty || this.loginForm.get(inputName)?.touched)) return true
    else return false;
  }
}