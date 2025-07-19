import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent implements OnInit {
  
  updateUserForm : FormGroup;
  constructor(private crud: CrudService, private activeRoute : ActivatedRoute, private router : Router, private fb: FormBuilder) { 
     this.updateUserForm = this.fb.group({
         id : [''],
         name : [''],
         username : [''],
         email : ['']
     })
  }
  
  userData : any;
  userId! : {
    uid : number;
  }

  ngOnInit(): void {
     
    this.userId = {
      uid : this.activeRoute.snapshot.params['id']
    }
    console.log(this.userId.uid);

    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res;
      this.updateUserForm.setValue({id : this.userData.id, name : this.userData.name, username : this.userData.username, email : this.userData.email})
    })
   
  }

  onSubmit() {
    this.crud.putDataById(this.userId.uid, this.updateUserForm.value).subscribe(res=> {
      this.router.navigateByUrl('crud');
    })
  }

  onCancel() {
    this.router.navigateByUrl('crud');
  }

}
