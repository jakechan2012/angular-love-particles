import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import 'particles.js';

import { Settings } from '@shared/const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
    particlesJS('particles', Settings.ParticlesConfig);
  }

  ngOnDestroy() {
    if (pJSDom && pJSDom.length > 0) {
      // 单页应用的全局对象一直会存在，会产生性能问题
      // 如果存在全局对象则先销毁
      pJSDom[0].pJS.fn.vendors.destroypJS();
      pJSDom = [];
    }
  }

  onSubmit() {
    this.router.navigate(['/']);
  }
}
