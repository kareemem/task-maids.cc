import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Users } from '../users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  page:number=0
  users:Users[]=[]
  searchValue:string=''
  emailValue:string=''
currentPage:number=1
constructor(private _ApiService:ApiService){}
ngOnInit(): void {
this.totalPage()
}
totalPage(){
  this._ApiService.getTotalPage().subscribe({
    next:(response:any)=>{
      // console.log(response);
      this.page=response.total_pages
      this.allUsers()
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
allUsers(){
if(this.page>0){
  for(let i=1;i<=this?.page;i++){
    this._ApiService.getAllUsers(i).subscribe({
      next:(response:any)=>{
        for(let i=0;i<response?.data.length;i++){
          this.users.push(response.data[i])
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
    }
}
}

changePage(event:any){
  this.currentPage=event
}
}
