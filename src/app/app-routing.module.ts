import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'panel', loadChildren: () => import('./main/panel/panel.module').then(m => m.PanelModule), canActivate: [AuthGuard] },
  { path: 'landing', loadChildren: () => import('./main/landing/landing.module').then(m => m.LandingModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
