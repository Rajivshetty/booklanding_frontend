import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarydataService } from '../librarydata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName: String;
  email: String;
  mobile: String;
  password: String;
  address: String;
  userDetails = {}
  constructor(private router: Router, private libraryDataService: LibrarydataService) { }

  ngOnInit() {
  }

  userRegister() {
    alert('User Registered Successfully');
    this.userDetails = { userName: this.userName, userEmail: this.email, phoneNo: this.mobile, password: this.password, address: this.address }
    this.libraryDataService.registerUser(this.userDetails)
      .subscribe(data => {
        this.userDetails = data;
        console.log('this.userInfo', this.userDetails);
        this.router.navigate(['\home']);
        alert('User Registered Successfully');
      })
  }

}
