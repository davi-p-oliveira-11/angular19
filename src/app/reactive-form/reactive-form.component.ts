import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  reactiveForm : FormGroup;

  constructor(private fb : FormBuilder){
    this.reactiveForm = this.fb.group({
      firstname : ['',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lastname : ['',[Validators.required, Validators.minLength(10)]],
      email : ['',[Validators.required, Validators.maxLength(15), Validators.email]],
      password : ['',[Validators.required]],
      isChecked : [''],
      address : this.fb.group({
        city:[''],
        street:[''],
        pincode:[''],
      }),
      skills : this.fb.array([])
    })

    this.reactiveForm.controls['isChecked'].disable();
  }

  get skills() : FormArray{
    return this.reactiveForm.get("skills") as FormArray
  }

  newSkill(): FormGroup{
    return this.fb.group({
      skill : ''
    })
  }

  addSkill(){
    this.skills.push(this.newSkill());
  }

  deleteSkill(i:number){
    this.skills.removeAt(i);
  }

  onSubmit(){
    console.log(this.reactiveForm.value);    
  }
  setAllValues(){
    this.reactiveForm.setValue({
      firstname : "Poonam",
      lastname:"PoonamPatel",
      email : "patel@gmail.com",
      password : 123,
      isChecked : true,
      address : {
        city : 'Mumbai',
        street : "Charni Road",
        pincode : 1234
      },
      skills : []
    })
  }

  setPartialValues(){
    this.reactiveForm.patchValue({
      address : {
        city : 'Mumbai',
        street : "Charni Road",
        pincode : 123456
      }
    })

    // this.reactiveForm.controls['firstname'].patchValue('Poonam');
  }

  resetForm(){
    this.reactiveForm.reset();
    // this.reactiveForm.controls['firstname'].reset();
  }
}
