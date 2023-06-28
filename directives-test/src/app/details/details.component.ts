import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent {
  btnClickCounter: number[]=[];
  displayParagraph: boolean = false;

  onBtnClick(){
    this.btnClickCounter.push(this.btnClickCounter.length+1);
    this.displayParagraph=!this.displayParagraph;
  }


}
