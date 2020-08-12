import { Component, VERSION,ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor( ) { }

//  @ViewChild(Child1Component) child1:Child1Component;
 
  ngOnInit(): void {
    
  }
}
