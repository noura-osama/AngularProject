import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  register(user:User){
    return this.http.post<User>("https://blogs-sys.herokuapp.com/users",user);
  }

  login(user:User){
    return this.http.post<User>("https://blogs-sys.herokuapp.com/users/login",user);
  }

  getUser(name:string){
    return this.http.get<User[]>("https://blogs-sys.herokuapp.com/users/"+name);
  }

  profile(){
    return this.http.get<User>("https://blogs-sys.herokuapp.com/users/profile");
  }

  deleteUser(){
    return this.http.delete("https://blogs-sys.herokuapp.com/Account/delete");

  }

  editUser(user:User){
    return this.http.patch("https://blogs-sys.herokuapp.com/Account/edit",user);
  }

  constructor(public http:HttpClient) { }
}
