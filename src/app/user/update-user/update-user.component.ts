import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/Core/Models/user';
import { UserServiceService } from 'src/app/Core/Services/user-service.service';
import { User7Service } from 'src/app/Core/Services/user7.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
myId=0;
myUser:any;

updateUserForm= this.fb.group({
  id:[''],
  firstName:[''],
  lastName:[''],
  birthDate:[''],
  email:[''],
  password:[''],
  profession:[''],
  accountCategory:[''],
  picture:['']

})



  constructor(private actR: ActivatedRoute, private R:Router,private user7: UserServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
   //this.myId = Number(this.actR.snapshot.params['param']);
    this.actR.paramMap.subscribe(data => this.myId = Number(data.get('param')));
    console.log(this.myId);



    this.user7.getUserById(this.myId).subscribe(data => {
     // console.log(data)
      this.myUser=data

      this.updateUserForm.setValue({id: this.myUser.id,  firstName:this.myUser.firstName, lastName:this.myUser.lastName,
        birthDate:this.myUser.birthDate,email:this.myUser.email,password:this.myUser.password,profession: this.myUser.profession,
        accountCategory:this.myUser.accountCategory, picture: this.myUser.picture

      })
    });


  }
  // updateNext(){
  //   this.R.navigate(['updateUser', this.myId++]);
  // }


  update(){
    this.user7.updateUser(this.updateUserForm.value).subscribe(()=>
      this.R.navigate(['users'])
    )
  }

}
