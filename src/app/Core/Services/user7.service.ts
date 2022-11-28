import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class User7Service {

  url = "http://localhost:3000/users";
  constructor(private http:HttpClient) { }


  getAllUsers(){
    return this.http.get<User[]>(this.url);
  }

  getUserById(id: Number){
    return this.http.get<User>(this.url+'/'+id);
  }

  addUser(user:User){
    return this.http.post(this.url,user);
  }

  deleteUser(id:Number){
    return this.http.delete(this.url+'/'+id);
  }

  updateUser(id:Number,user:User){
    return this.http.put<User>(this.url+'/'+id, user);
  }

}
