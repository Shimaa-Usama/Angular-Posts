import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  firebaseErrorMessage: string;


  constructor(private fb: FormBuilder,private authService: AuthService, private router: Router) {
    this.firebaseErrorMessage = '';

    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  signup() {
    this.authService.signupUser(this.signupForm.value).then((result) => {
        if (result == null)                               
            this.router.navigate(['/login']);
        else if (result.isValid == false)
            this.firebaseErrorMessage = result.message;
    }).catch(() => {      
    });
}

}
