import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/Auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(model: any) {
    this.authService.login(this.model).subscribe(next => {
      console.log('log in success!');
    }, error => {
      console.log(error);
    });
  }
}
