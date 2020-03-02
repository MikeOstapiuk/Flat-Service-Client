import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

user: User = new User();
done = false;
constructor(private httpService: HttpService) {}
submit(user: User) {
  this.httpService.postData(user)
    .subscribe(
      (data: User) => {this.done = true; },
      error => console.log(error)
    );
  }
}
