

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
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
  LoginForm: FormGroup = new FormGroup({
  email: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z0-9]{3,}(\.?|[A-Za-z0-9]){5,}@(yahoo|gmail|ymail|hotmail)\.(com|Com)$')]),
  password: new FormControl(null, [Validators.required, Validators.min(8), Validators.pattern('^[a-zA-Z0-9]{8,16}$')]),

  })

  constructor(public _UsersService:UsersService , public _Router:Router) { 

  


  }

  ngOnInit(): void {
    this.sayhello()
    this._UsersService.userData.subscribe(() => {
      if (this._UsersService.userData.getValue() != null) {
          this.isLogin = true;
      }
      else {
        this.isLogin = false;
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
 LoginNav(LoginForm: FormGroup) {
    if (LoginForm.valid) {
      this._UsersService.LoginNav(LoginForm.value).subscribe((response) => {
        if (response.message == 'success') {
          localStorage.setItem("userToken" ,response.token )
          this._UsersService.saveData()
          this._Router.navigate(['Home'])
         
          

        } else {
          console.log(response.message)
          alert(this.errors = response.message)
          
        }
      })
    }
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
      this.clickclosing()
  }

  


}
