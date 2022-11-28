import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Core/Services/user-service.service';
import { User7Service } from 'src/app/Core/Services/user7.service';
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

  constructor( private route:Router, private userS: UserServiceService, private user7: User7Service) { }

  listUsers:User[] = [];

  ngOnInit(): void {
        this.getUsers();
      }

   getUsers(){
    this.user7.getAllUsers().subscribe(data => this.listUsers= data);
   }


deleteUser7(id:any){
  this.user7.deleteUser(Number(id)).subscribe( () =>this.getUsers() );
}


goToAdmin(){
    this.route.navigate(['users/Admin']);
  }
}
