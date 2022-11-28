import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class UserServiceService {


usersList: User[]= [];


  constructor( private http: HttpClient ) { }
  //URL du Backend
  url = "http://localhost:3000/users";

  getAllUsers(){
   return this.http.get<User[]>(this.url);
  }

  deleteUser(id:Number){
    return  this.http.delete(this.url+'/'+id);
  }

  getUserById(id:Number){
    return this.http.get<User>(this.url+'/'+id);
  }

  updateUser(u:User){
    const ID = Number(u.id);
    console.log(ID);

     return this.http.put(this.url+'/'+ID, u);
  }



















fetchNbInList(list: any, attribute:string, attributeVal: string){
 let cpt =0;
  for (let elt in list){
      if(list[elt][attribute] === attributeVal){
        cpt++;
      }
  }
return cpt;
}





}
