import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarydataService } from '../librarydata.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userEmail: any;
  password: any;
  loggedInUser: String;
  userInfo = {};
  constructor(private router: Router, private libraryDataService: LibrarydataService, private userService: UserService) { }

  ngOnInit() {
  }

  /* User Login */
  userLogin() {
    // if (this.user == "David" && this.pswd == "Sone") {
    //   alert('Logged in Successfully');
    //   this.router.navigate(['\home']);
    // } else {
    //   alert('Login Failed');
    // }
    
    this.userInfo = { userEmail: this.userEmail, password: this.password };
    this.libraryDataService.login(this.userInfo)
      .subscribe(data => {
        this.userInfo = data;
        this.userService.currentUserInfo = data;
        this.router.navigate(['\home']);
        console.log('this.userInfo', this.userInfo);
      })

  }
}

