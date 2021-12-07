
// <!-- تم بفضل الله -->
// <!-- اللهم صل وسلم وبارك علي سيدنا محمد -->
// <!-- Ahmed Adel -->

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
declare const showPasword:any



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errors: string = '';
  
    LoginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z0-9]{3,}(\.?|[A-Za-z0-9]){5,}@(yahoo|gmail|ymail|hotmail)\.(com|Com)$')]),
    password: new FormControl(null, [Validators.required, Validators.min(8), Validators.pattern('^[a-zA-Z0-9]{8,16}$')]),

  })
  constructor(public _UsersService:UsersService , public _Router:Router ,  ) { 


  }

  ngOnInit(): void {
  }

 Login(LoginForm: FormGroup) {

    if (LoginForm.valid) {

      this._UsersService.Login(LoginForm.value).subscribe((response) => {

        if (response.message == 'success') {
          
          localStorage.setItem("userToken" ,response.token )
            this._UsersService.saveData()
          this._Router.navigate(['Home'])

        } else {
          this.errors = response.message
        }
      })
    }
  }
  show(){

    showPasword()
  }
}
