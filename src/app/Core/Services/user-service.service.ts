import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
/*Une seule instance du service disponible dans toute l’application
fournir le service au niveau
racine.*/
@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class UserServiceService {


usersList: User[]= []

  constructor(private http: HttpClient) { }
  //URL backend
  url = "http://localhost:3000/User";
  getAllUsers(){
    return this.http.get<User[]>(this.url);
  }
  deleteUser(id: number){
    return this.http.delete(this.url + '/' + id);
  }
  
  getUserById(id: number){
    return this.http.get<User>(this.url + '/' + id);}

    updateUser(u: User){
      return this.http.put(this.url + '/' + u.id, u);
    }
    
/*getAllUsers(){
  return this.usersList;
}
*/


  delete(user: User){
     const index = this.usersList.indexOf(user, 0);
if (index > -1) {
   this.usersList.splice(index, 1);
}
  }

  fetchNbInList(list: any, attribute:string, attributeVal: string){

    let nb = 0;
    for(let i = 0; i < list.length; i++){
      if(list[i][attribute] === attributeVal){
        nb++;
      }
    }
    return nb;
  }

}
