import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.scss']
})
export class PostControlComponent implements OnInit {
  editForm: FormGroup;
  post: any;
  postID: any;

  constructor(private apiService: ApiService, private fb: FormBuilder, private route: ActivatedRoute, private _route:Router) {
    this.postID = this.route.snapshot.paramMap.get('id');

    this.editForm = this.fb.group({
      title: [''],
      body: [''],
    });
  }

  ngOnInit(): void {
    this.apiService.getByID('posts', this.postID).subscribe((result: any) => {
      this.post = result;
      this.editForm.patchValue(result);

    });
  }

  EditPost() {
    
    this.apiService.put(`posts/${this.postID}`, this.editForm.value).subscribe((result) => {
      this._route.navigate(['/panel/posts/all']);
    });
  }

}
