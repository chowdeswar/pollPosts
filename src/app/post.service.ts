import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() 

export class PostService {

	private apiUrl = "https://hn.algolia.com/api/v1/search_by_date?tags=story";

	constructor(private http: Http) {}

	getData() {
		return this.http.get(this.apiUrl)
	     .map((res: Response) => res.json());
	}
}