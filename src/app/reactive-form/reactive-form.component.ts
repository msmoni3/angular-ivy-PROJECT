import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
  
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

// reactiveLoginForm:FormGroup
  reactiveLoginForm = new FormGroup({
    inputEmail4: new FormControl(''),
    inputPassword4 : new FormControl(''),
    inputAddress : new FormControl('') 
    })
    
   
  onClick(){
  console.log("submit")
  console.log(this.reactiveLoginForm.value)

}



  ngOnInit() {
    // this.reactiveLoginForm = new FormGroup({
    //   'userDetail':new FormGroup({
    //     'email': new FormControl('moni')
    //   })
      
    // })
  }
}