import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.scss']
})
export class AllCommentsComponent implements OnInit {
  comments: any[] = [];
  postId: any ;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {    
    this.postId = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {    
    this.apiService.get(`posts/${this.postId}/comments`).subscribe((result: any) => {
      this.comments = result;
    });
  }


}
