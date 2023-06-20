import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean = false;      // other components can check on this variable for the login status of the user
  tokenExpiration: Date = new Date();

  constructor(private afAuth: AngularFireAuth) {
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.userLoggedIn = true;

      })
      .catch(error => {
        console.log('error code', error.code);
        console.log('error', error);
        return { isValid: false, message: error.message };
      });
  }

  signupUser(user: any): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
      })
      .catch(error => {
        console.log('Auth Service: signup error', error);
        return { isValid: false, message: error.message };
      });
  }

  extendSession(user: any) {
      const newExpiration = new Date();
      newExpiration.setSeconds(newExpiration.getSeconds() + 3600); // Extend by 1 hour
      user.updateProfile({
        photoURL: '',
        displayName: '',
        email: '',
        phoneNumber: '',
        password: '',
        disabled: false,
        refreshToken: '',
        emailVerified: false,
        metadata: {
          lastSignInTime: '',
          creationTime: ''
        },
        tenantId: '',
        providerData: [],
        customClaims: {},
        validSince: new Date().toISOString(),
        validUntil: newExpiration.toISOString()
      }).then(() => {
        user.reload().then(() => {
          user.getIdTokenResult(true).then((idTokenResult :any)=> {
            this.tokenExpiration = new Date(idTokenResult.expirationTime);
          });
        });
      }).catch((error:any) => {
        console.error(error);
      });
  }

  logout() {
    this.userLoggedIn = false;
  }
}
