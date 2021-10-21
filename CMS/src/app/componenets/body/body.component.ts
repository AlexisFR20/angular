import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { UserI } from 'src/app/models/user.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  usersList: any;
  buscar: any;
  inputext: string = "";
  users: UserI[];

  constructor(private servicio: UsersService) {
    this.users = [];
   }

  ngOnInit(): void {
    this.servicio.getUsers().subscribe(data => (this.users = data));
  }

}
