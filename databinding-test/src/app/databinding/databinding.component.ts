import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent {
userName: string="";
showUsername: boolean = false;
resetUsername (){
  this.userName= "";
  this.showUsername= false;
}
addUsername(){
  this.showUsername= true;
}
}
