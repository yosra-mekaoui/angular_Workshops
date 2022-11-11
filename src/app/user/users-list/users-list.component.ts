import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';
import { UserServiceService } from 'src/app/Core/Services/user-service.service';
import { User } from '../../Core/Models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
id= 5;

// La variable permetant de récupérer la valeur de recherche
filter!:string;

  constructor( private route:Router, private userS: UserServiceService) { }
listUsers:User[] = [];
  ngOnInit(): void {
   // this.listUsers= this.userS.getAllUsers();
   // console.log(this.userS.fetchNbInList(this.userS.usersList,"accountCategory","Customer"));
    this.getUser();
  }
  getUser(){
  this.userS.getAllUsers().subscribe(data => this.listUsers = data);
 }
  goToAdmin(){
    this.route.navigate(['users/Admin']);

  }

 /* deleteUser(user:User){
this.userS.delete(user);
  }*/
  deleteUser(id:any){
    this.userS.deleteUser(id).subscribe(
      () => this.getUser() );
      }
fetchNbInList(){
  
  console.log(this.userS.fetchNbInList(this.userS.usersList,"accountCategory","Customer"));
}
}