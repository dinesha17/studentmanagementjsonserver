import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  showadd! : boolean;
  showupdate!:boolean


  formvalue!:FormGroup
  constructor(private formbuilder:FormBuilder){

  }

ngOnInit(): void {
  this.formvalue = this.formbuilder.group({
     name:['',Validators.required],
     email:['',Validators.required],
     phonenumber:['',Validators.required],
     city:['',Validators.required]
  })
  
}
add(){
 this.showadd=true;
 this.showupdate= false;
} 
update(){
this.showupdate=true;
this.showadd=false;
}   

}
