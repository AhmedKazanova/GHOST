

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { __values } from 'tslib';
import { UsersService } from '../users.service';

declare const MyFun:any ;
declare const ClickClosing:any

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  uservalue:any = ''
  userName:any = ''
  datauserlogin:string = ''
  errors:string = ''
  isLogin:boolean = false


  constructor(public _UsersService:UsersService , public _Router:Router ) { 

  


  }

  ngOnInit(): void {

    
    
    this._UsersService.userData.subscribe(() => {
      if (this._UsersService.userData.getValue() != null) {
        this.isLogin = true;
        setTimeout(() => {
          this.sayhello()
        }, 1)
      }
      else {
        this.isLogin = false;
        setTimeout(() => {
          this.sayhello()
        }, 1);
      }
    })
    
    
  }

  sayhello(){

    let decodeData = JSON.stringify(localStorage.getItem('userToken'))
    this._UsersService.userData.next(jwtDecode(decodeData))
      this.uservalue = this._UsersService.userData.value
      this.userName = this.uservalue.first_name
    
      
    }
   
    
  

  hope(){
    alert("I hope You liked My Work \n اتمني أن موقعي  قد نال اعجابكم \n Front-End Developer Ahmed Adel ")
  }


  callfun():void{
    MyFun()
  }
  clickclosing():void{
    ClickClosing()
  }

  logout(){
      this._UsersService.userData.next(null)
      localStorage.removeItem('userToken');
      this._Router.navigate(['Login']);
      ClickClosing()
  }

  
  logoClick() {
    setTimeout(() => {
      location.reload()
    }, 1);
}

}
