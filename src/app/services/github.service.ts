import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUsersByInName(searchString:string): Observable<any> {
    const url = "https://api.github.com/search/users?q="+searchString+"%20in:name";
    return this.http.get(url);
  }
}
