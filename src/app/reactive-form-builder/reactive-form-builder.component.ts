import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl ,FormBuilder , FormArray  } from '@angular/forms';

@Component({
  selector: 'reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html'
})
export class ReactiveFormBuilderComponent implements OnInit {

  constructor(private _fb:FormBuilder) { }
  // For Using FormBuilder we dont need FormGroup we need to comment the below codes from line no 13-21 and write codes like the line no from 25-

// profileForm = new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//     address: new FormGroup({
//       street: new FormControl(''),
//       city: new FormControl(''),
//       state: new FormControl(''),
//       zip: new FormControl('')
//     })
//   });

// hobby: FormArray;

profileForm = this._fb.group({
      firstName: [' '],
    lastName: [' '],
    address: this._fb.group({
      street: [' '],
      city: [' '],
      state: [' '],
      zip: [' '],
    }),
    hobbyList: this._fb.array([])
})

get hobbyList() : FormArray {
  return this.profileForm.get("hobbyList") as FormArray
}

newhobby(): FormGroup {
   return this._fb.group({
     hobby: '',
    //  exp: '',
   })
}

addHobby(){
console.log(this.hobbyList.push(this.newhobby()));
}
updateProfile() {
  this.profileForm.patchValue({
    firstName: 'Nancy',
    address: {
      street: '123 Drew Street'
    }
  });
}

onSubmit(){
// console.warn(this.profileForm.value.hobby);
}
  ngOnInit() {
  }

}