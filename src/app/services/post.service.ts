import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Categoria, Post } from '../models/Post';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsList: Post[];
  private url: string;

  constructor(private _http: HttpClient) {
    this.postsList = new Array<Post>();
    this.url = environment.api.url;
  }

  getPostsListSize(categoryFilter: string, searchParams: string = ''): Observable<any> {
    return this._http.get(`${this.url}/posts/count?${categoryFilter}${searchParams}`);
  }

  getPostList(categoryFilter: string = '', searchParams: string = '', start: number = 0, limit: number = 4): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.url}/posts?${categoryFilter}${searchParams}_start=${start}&_limit=${limit}`);
  }

  getRecentPostList(sort: string = '', limit: number = 4): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.url}/posts?_sort=${sort}&_limit=${limit}`);
  }
  getPostById(id: string): Observable<Post> {
    return this._http.get<Post>(`${this.url}/posts/${id}`);
  }
  //if limit === 0 returns all the elements
  getEnabledCategories(limit: number = 0): Observable<Categoria[]> {
    return this._http.get<Categoria[]>(`${this.url}/categories${(limit) ? "?_limit=" : ""}${(limit)?limit:""}`);
  }  
}