import { Component, OnInit } from '@angular/core';
import { Iuser } from '../iuser';
import { CrudService } from '../crud.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {
  
  apiData : Iuser[] = [];

  constructor(private crud : CrudService, private router : Router) {}
  
  ngOnInit(): void {
    this.getAllData();
  }


  getAllData() {
    this.crud.getData().subscribe(res =>{
       this.apiData = res;
    })
  }

  addNewUser(){
    this.router.navigateByUrl('adduser');
  }

  onUpdate(id : number){
    this.router.navigate(['updateuser', id]);
  }
}
