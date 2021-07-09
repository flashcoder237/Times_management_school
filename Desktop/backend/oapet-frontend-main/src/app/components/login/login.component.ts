import { AuthService } from '../../services/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private authStatus = false

  credentials = {
    email: '',
    password: '',
  }

  error = ''

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log("Status: ", this.authService.isAuthenticated())
  }

  onSubmit() {
    // this.authService
    //   .sigin(this.credentials.email, this.credentials.password)
    // .subscribe()
  }

}
