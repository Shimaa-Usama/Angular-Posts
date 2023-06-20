import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostControlComponent } from './components/posts/post-control/post-control.component';
import { AllPostsComponent } from './components/posts/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/comments/all-comments/all-comments.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts/all' },
  {
    path: 'posts',
    children: [
      { path: 'control/:id', component: PostControlComponent, canActivate: [AuthGuard] },
      { path: 'all', component: AllPostsComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: 'comments',
    children: [
      { path: 'all/:id', component: AllCommentsComponent, canActivate: [AuthGuard] }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
