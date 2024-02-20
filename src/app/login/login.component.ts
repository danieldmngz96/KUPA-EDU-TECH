import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  error: any = null;

  constructor(
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  async register() {
    this.spinner.show();

    this.auth.register(this.email, this.password).subscribe(
      (res) => {
        this.spinner.hide();
        this.login();
        console.log(this.login);
      },
      (err) => {
        this.spinner.hide();
        this.error = err.error;
      }
    );
  }

  async login() {
    this.spinner.show();
  
    this.auth.login(this.email, this.password).subscribe(
      (res: any) => {
        this.spinner.hide();
        console.log(res);
        console.log(res.token);
        if (res && res.token) {
          this.router.navigateByUrl('/dashboard', { replaceUrl: true });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Un error en el Login!",
            footer: '<a href="#">Contacta servicio tecnico?</a>'
          });
        }
      },
      (err) => {
        this.spinner.hide();
        this.error = err.error;
      }
    );
  }
  
}
