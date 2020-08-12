import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html'
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild('tempUserForm') tempUserForm:NgForm

 fromValue:""

  constructor() { }

  ontempSubmit(){
    console.log("Submit")
    this.fromValue = this.tempUserForm.value.email
    console.log(this.tempUserForm.value)
    this.tempUserForm.reset()
    // tempUserForm.reset()
  

  }
  ngOnInit() {
    
  }

}