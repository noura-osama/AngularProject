import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogs } from '../_models/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getAll(){
    return this.http.get<Blogs[]>("http://localhost:3000/blogs/")    
  }
  constructor(public http:HttpClient) { }
}
