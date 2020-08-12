import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'formarray-sample',
  templateUrl: './formarray-sample.component.html'
})
export class FormarraySampleComponent implements OnInit {

  constructor() { }
  

f: FormGroup;
  ngOnInit() {
    this.f = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      hobbies: new FormArray([]),
    })
  }

onAddHobby() {
    const control = new FormControl(null);
    (<FormArray>this.f.get("hobbies")).push(control);
  }
 
  
    onSubmit() {
    console.log(this.f);
    }
 }