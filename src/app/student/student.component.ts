import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { studentdata } from './student.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  showadd! : boolean;
  showupdate!:boolean
allstudentdata:any;
   studentmodel:studentdata=new studentdata
  formvalue!:FormGroup
  constructor(private formbuilder:FormBuilder,private apiservices:ApiService){

  }

ngOnInit(): void {
  this.formvalue = this.formbuilder.group({
     name:['',Validators.required],
     email:['',Validators.required],
     phonenumber:['',Validators.required],
     city:['',Validators.required]
  });
  this.getdata();
  
}
add(){
 this.showadd=true;
 this.showupdate= false;
} 
update(){
this.showupdate=true;
this.showadd=false;
}   
addstudent(){
  debugger
  
  this.studentmodel.name = this.formvalue.value.name;
  this.studentmodel.email = this.formvalue.value.email;
  this.studentmodel.phonenumber = this.formvalue.value.phonenumber;
  this.studentmodel.city = this.formvalue.value.city;

  this.apiservices.poststudent(this.studentmodel).subscribe(res=>{
    console.log(res)
    this.formvalue.reset()
    alert("record added sucessfully")
  },
  err=>{
    alert("something wrongpls check me?")
  }
  )
}
//getdata
getdata(){
  this.apiservices.getstudent().subscribe(res=>{
    this.allstudentdata = res;
  })
}
}
