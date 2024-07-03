import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit , OnChanges, DoCheck{

  @Input('serverElement') element: {type: string, name: string, content: string}



  constructor() {
    console.log("Constructor called");
    
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log("ngOnChanges called");
  //  console.log("SimpleChanges called", changes);
  //  console.log("SimpleChanges called", this);


   
  }

  ngOnInit(): void {
   console.log("ngOnInit called");
   
  }

  called() {
    console.log('data is->', this.element)
  }

 
}
