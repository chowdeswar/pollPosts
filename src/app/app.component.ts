import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private apiUrl = "https://hn.algolia.com/api/v1/search_by_date?tags=story";
  data: any = {};
  selectedItem: any;
  sub: any;

  constructor(private http: Http) {
    this.getData();
    this.getContacts();
    this.sub = Observable.interval(10000)
    .subscribe((val) => { 
      this.getData();
      this.getContacts();
    });     
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getContacts() {
    return this.getData().subscribe(data => {
      this.data = data;
    })
  }

  showClick(item:any) {
    this.selectedItem = item;
  }

  ngOnInit(){
          
  }


}