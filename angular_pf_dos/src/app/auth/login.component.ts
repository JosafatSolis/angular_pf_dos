import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginDTO } from './login-dto';
import { RawLoginValueItem } from './raw-login-value-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentials: boolean = false;

  form = this.formBuilder.group({
    user: ['', [Validators.required]],
    pwd: ['', [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  controls = {
    user: this.form.get('user'),
    pwd: this.form.get('pwd')
  }

  onSubmitHandler() {
    if(this.form.valid) {
      const loginDTO = new LoginDTO(this.form.value as RawLoginValueItem);
      if(this.authService.LogIn(loginDTO)) {
        this.router.navigate(['home'])
      } else {
        this.invalidCredentials = true;
      }
    }
  }
}
