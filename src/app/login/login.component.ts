import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginformgroup = new FormGroup({
    'email': new FormControl('', [
      Validators.required
    ]),
    'password': new FormControl('', [
      Validators.required
    ]),
  });


  // loginformgroup = this.builder.group({
  //   email: new FormControl('' , [
  //     Validators.required,
  //     Validators.minLength(5),
  //     Validators.maxLength(5),
  //   ]),
  //   password: new FormControl('' , [
  //     Validators.required,
  //     Validators.minLength(8),
  //     Validators.maxLength(72),
  //   ]),
  // });

  constructor(
    // private builder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginformgroup.value.email);
    // console.log(this.loginformgroup.controls.email);
  }
}
