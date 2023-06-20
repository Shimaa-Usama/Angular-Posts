import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PostControlComponent } from './components/posts/post-control/post-control.component';
import { AllPostsComponent } from './components/posts/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/comments/all-comments/all-comments.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostControlComponent,
    AllPostsComponent,
    AllCommentsComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ]
})
export class PanelModule { }
