import { Component, OnInit } from '@angular/core';
import { UserService } from './User-Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  activeUsers:string[] = [];
  inactiveUsers:string[] = [];

constructor(private userService: UserService){
  
}
ngOnInit(){
  console.log(this.activeUsers);
  this.activeUsers = this.userService.activeUsers
  this.inactiveUsers = this.userService.inactiveUsers ;
  console.log(this.inactiveUsers);
  
}
  
}
