import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/posts';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  constructor(private _postService:PostService, private route:ActivatedRoute) { }
  viewStyle="none";
  idData=[];
  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    this._postService.getPostById(id).subscribe(res => {
      console.log(res);
      
      this.idData.push(res);
    });
  }
  openPop(){
    this.viewStyle="block"
  }
  closePop(){
    this.viewStyle="none"
  }
}
