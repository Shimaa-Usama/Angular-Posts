import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {

  }
  ngOnInit(): void {
    this.apiService.get('posts').subscribe((result: any) => {
      this.posts = result;
    });
  }



  deletePost(id: number) {
    this.apiService.delete(`posts/${id}`).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
      console.log('Post deleted:', id);
    });
  }
}