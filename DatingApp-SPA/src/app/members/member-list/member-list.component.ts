import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
users: User[];
  constructor(private userservice: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers(): any {
    this.userservice.getUsers().subscribe((users: User[]) => {
        this.users = users;
      }, error => {
        this.alertify.error(error);
      });
  }

}
