import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Listing } from './listing';
import{Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private _url: string="https://jsonplaceholder.typicode.com/posts?_limit=10";

  constructor(private http: HttpClient) { }
  getListing():Observable<Listing[]>{
    return this.http.get<Listing[]>(this._url);
  }

}
