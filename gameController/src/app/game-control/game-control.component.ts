import { Component, EventEmitter, Output } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent {
  @Output() eventTrigger = new EventEmitter<number>();
  counter=0;
  interval:any;

  onGameStart(){
  this.interval= setInterval(()=>{
    this.eventTrigger.emit(this.counter++);
  },1000);
  }

  onGamePause(){
    clearInterval(this.interval);
  }
}
