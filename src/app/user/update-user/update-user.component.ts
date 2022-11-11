import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserServiceService } from 'src/app/Core/Services/user-service.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  myId=0;
  user ={
    id:0,
    firstName:'',
    lastName:'',
    birthDate:'',
    email:'',
    password:'',
    profession:'',
    accountCategory:'',
    picture:''}

  constructor(private actR: ActivatedRoute, private R: Router, private userS: UserServiceService) { }

  ngOnInit(): void {
   //this.myId = Number(this.actR.snapshot.params['param']);
    this.actR.paramMap.subscribe(data => this.myId = Number(data.get('param')));

    this.userS.getUserById(Number(this.myId)).subscribe(data => this.user = data); 
    console.log(this.user.id); 
  }
  // updateNext(){
  //   this.R.navigate(['updateUser', this.myId++]);
  // }

}
