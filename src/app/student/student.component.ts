import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
