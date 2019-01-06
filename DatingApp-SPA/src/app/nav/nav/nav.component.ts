import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/Auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {};
  constructor(private authService: AuthService,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login(model: any) {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('log in success!');
    }, error => {
      this.alertify.error(error.message);
      // console.log(error);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
}
