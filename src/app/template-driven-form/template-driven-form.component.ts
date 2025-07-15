import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent implements OnInit {
  userObject : User = {};

  onSubmit(userForm: NgForm) {
    console.log(userForm.value)
  }

  ngOnInit(): void {
   // this.userObject = {
   //   firstName : "Rahul",
   //   lastName : "Varma",
   //   email : "gaims@gmail.com",
   //   pass : 12345,
   //   isCheck : true,
   // }
  }

  setValues(userForm:NgForm) {
    let obj = {
      firstName : "Rahul",
      lastName : "Varma",
      email : "gaims@gmail.com",
      pass : 12345,
      isCheck : true,
    }
    userForm.setValue(obj);
  }

  patchValues(userForm:NgForm) {
    let obj = {
       firstName : "Rahul",
       lastName : "Varma",
       email : "gaims@gmail.com",
    }
    userForm.control.patchValue(obj);
  }

  resetValues(userForm:NgForm) {
    userForm.reset();
    // userForm.resetForm();
  }
}
