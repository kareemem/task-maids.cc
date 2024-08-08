import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient) { }
  getTotalPage(){
    return this._HttpClient.get('https://reqres.in/api/users?page={page}')
  }
  getAllUsers(page:number){
    return this._HttpClient.get(`https://reqres.in/api/users?page=${page}`)
  }
  getUserDetails(id:number){
    return this._HttpClient.get(`https://reqres.in/api/users/${id}`)
  }
}
