import { Component, OnInit } from '@angular/core';
import { of  , fromEvent , interval } from 'rxjs'
import { mergeMap  , mapTo ,concatMap, concat,exhaustMap, debounceTime, switchMap} from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'rxjs-map',
  templateUrl: './rxjs-map.component.html',
  styleUrls: ['./rxjs-map.component.css']
})
export class RXJSMAPComponent implements OnInit  {

  constructor() { }

  titleData = of("Mr" , "Mrs" , "Miss");

counter = 0;
 
search : FormControl = new FormControl();

ngOnInit(){
this.search.valueChanges.pipe(
  debounceTime(100),
  exhaustMap(()=> interval(500))
)
.subscribe((val)=> {this.counter = val})
}



}