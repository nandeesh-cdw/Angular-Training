import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {
  @ViewChild("newServerContent", { static: true }) 
  serverContentInput!: ElementRef;
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  onAddServer(newServerInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName : newServerInput.value,
      serverContent : this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(newServerInput:HTMLInputElement) {
   this.blueprintCreated.emit({
    serverName : newServerInput.value,
    serverContent : this.serverContentInput.nativeElement.value
  });
  }
}
