import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { PostService } from './post.service';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'posts-dir',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Poll New Posts";
  data: any = {};
  selectedItem: any;
  sub: any;
  Search: any;

  constructor(private http: Http, private postService: PostService) {
    this.getContacts();
    this.sub = Observable.interval(10000)
    .subscribe((val) => { 
      this.getContacts();
    })    
  }

  getContacts() {
    return this.postService.getData().subscribe(data => {
      this.data = data;
    })
  }

  showClick(item:any) {
    this.selectedItem = item;
  }

}