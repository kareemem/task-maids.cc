import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Users } from '../users';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userId:any
  user:Users[]=[]
constructor(private _ActivatedRoute:ActivatedRoute,private _ApiService:ApiService){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.userId=params.get('id')
      this.getDetails()
    })
}
getDetails(){
  this._ApiService.getUserDetails(this.userId).subscribe({
    next:(response:any)=>{
      this.user.push(response.data)
    },
    error:(err)=>{
      console.log(err);

    }
  })
}
}
