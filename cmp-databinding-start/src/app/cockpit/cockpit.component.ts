import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  @Output('spCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  serverElements = [];
  newServerName = '';
  newServerContent = '';
  radiobutton = ''
  @ViewChild('serverNameInputComp') serverNameInputComp : ElementRef;
  @ViewChild('serverContentInput') serverContentInput : ElementRef;


  onAddServer(inputElement: HTMLInputElement) {
    // console.log('serverNameInputComp ->', this.serverNameInputComp)
    // console.log("radiobutton data ->", inputElement)
    // this.serverNameInputComp.nativeElement.value = 'Get lost server'
    this.serverCreated.emit({
      
       serverName: this.serverNameInputComp.nativeElement.value, 
       serverContent: this.serverContentInput.nativeElement.value
       });
  }
  onAddBlueprint(inputElement: HTMLInputElement) {
    this.bluePrintCreated.emit({ 
      serverName: this.serverNameInputComp.nativeElement.value, 
      serverContent: this.serverContentInput.nativeElement.value
     });
  }
}
