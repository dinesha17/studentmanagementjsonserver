import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  //create the post
  poststudent(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any) =>{
       return res;
    }))
  }
  //get
  getstudent(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any) =>{
      return res;
    }))
  }
  //update
  updatestudent(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  //deleted
  deletestudent(id:number){
    return this.http.delete("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
