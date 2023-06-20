import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public navValue: string = ''
  activateRoute: string = '';

  constructor(public afAuth: AngularFireAuth, private router: Router, public auth: AuthService) {

  }
  ngOnInit(): void {
        
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(this.router.url);
        switch (this.router.url) {
          case '/signup':
            this.navValue = 'Login'
            this.activateRoute = '/login'
            break;
          case '/login':
            this.navValue = 'Sign Up'
            this.activateRoute = '/signup'
            break;
          default:
            break;
        }
      }

    });
  }

  logout(): void {
    this.router.navigate(['/signin']);
    this.auth.logout();
    this.afAuth.signOut();
  }
}
