import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gameController';
  currentNumber!:number;
  onEventTrigger(num:number){
    console.log(num);
    this.currentNumber= num;
  }
}
