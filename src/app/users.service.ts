import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userData = new BehaviorSubject(null)

  constructor( private _HttpClient:HttpClient  ) {
     
    if(localStorage.getItem('userToken') != null){

        this.saveData()
    }

   }
  saveData(){
    let decodeData = JSON.stringify(localStorage.getItem('userToken'))
    this.userData.next(jwtDecode(decodeData))  
    
  }
  Register(FormSigninData:object):Observable<any>
  {
   return  this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup' , FormSigninData)
  }
  Login(FormLoginData:object):Observable<any>
  {
   return  this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin' , FormLoginData)
  }

 
}
