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
editdata(data:any){
this.showupdate=true;
this.showadd=false;
this.studentmodel.id = data.id

this.formvalue.controls['name'].setValue(data.name);
this.formvalue.controls['email'].setValue(data.email);
this.formvalue.controls['phonenumber'].setValue(data.phonenumber);
this.formvalue.controls['city'].setValue(data.city);

} 
//update
update(){
  this.studentmodel.name = this.formvalue.value.name;
  this.studentmodel.email = this.formvalue.value.email;
  this.studentmodel.phonenumber = this.formvalue.value.phonenumber;
  this.studentmodel.city = this.formvalue.value.city;
  this.apiservices.updatestudent(this.studentmodel,this.studentmodel.id).subscribe(res=>{
    console.log(res)
    this.formvalue.reset()
    this.getdata();
    alert("record update sucessfully")
  },err=>{
    alert("something not update")
  })

}  
addstudent(){
  
  this.studentmodel.name = this.formvalue.value.name;
  this.studentmodel.email = this.formvalue.value.email;
  this.studentmodel.phonenumber = this.formvalue.value.phonenumber;
  this.studentmodel.city = this.formvalue.value.city;

  this.apiservices.poststudent(this.studentmodel).subscribe(res=>{
    console.log(res)
    this.formvalue.reset()
    this.getdata()
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
//delete
deletestudent(data:any){
  if(confirm('are you sure to deleted'))
    this.apiservices.deletestudent(data.id).subscribe(res=>{
      alert("record deleted sucessfully")
  this.getdata()
    })
}
}
