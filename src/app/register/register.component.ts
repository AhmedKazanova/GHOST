// <!-- تم بفضل الله -->
// <!-- اللهم صل وسلم وبارك علي سيدنا محمد -->
// <!-- Ahmed Adel -->


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

declare const showPasword: any
FormControl

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errors: string = '';

  RegisterForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z]{3,8}$')]),
    last_name: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z]{3,8}$')]),
    email: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z0-9]{3,}(\.?|[A-Za-z0-9]){5,}@(yahoo|gmail|ymail|hotmail)\.(com|Com)$')]),
    password: new FormControl(null, [Validators.required, Validators.min(8), Validators.pattern('^[a-zA-Z0-9]{8,16}$')]),
    age: new FormControl(null, [Validators.required, Validators.min(18)])

  })
  constructor(public _UsersService: UsersService, public _Router: Router) { }

  ngOnInit(): void {
  }

  Register(RegisterForm: FormGroup) {

    if (RegisterForm.valid) {

      this._UsersService.Register(RegisterForm.value).subscribe((response) => {

        if (response.message == 'success') {

          this._Router.navigate(['Login'])

        } else {
          this.errors = response.errors.email.message
        }
      })
    }
  }

  show() {

    showPasword()
  }
}
