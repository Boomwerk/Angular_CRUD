import { Component, OnInit } from '@angular/core';
import { AlluserService } from '../alluser.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 users : any;
  
  constructor(private AlluserService : AlluserService) {
    
    this.getUsers();
   }

  ngOnInit(): void {
    
  }

  getUsers(){
    this.AlluserService.selectAllUsers().subscribe( (e) => {
      
     return this.users = e;
      
    })
    
  }

}
