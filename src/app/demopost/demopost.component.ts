import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  arrPost:Post[]=[];

  constructor(private _postService:PostService) { }

  ngOnInit() {
this._postService.getPostsData().subscribe(res =>{
  this.arrPost=res;
})
  }  //mostly we call API in this ngOnInit method

}
