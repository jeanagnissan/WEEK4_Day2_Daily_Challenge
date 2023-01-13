import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  user: User = {
    name: "Paul Allen",
    prenom: "Karl Darm",
    email: "pk@gmail.com",
    profilePictureUrl: "https://img.freepik.com/vecteurs-libre/illustration-concept-open-source_114360-2939.jpg?w=740&t=st=1673345326~exp=1673345926~hmac=8af04877969a916a200af2da53b5ee5514a8f273624307089318bee6354beb7b"
  }

  constructor() { }

  ngOnInit(): void {
  }

  getFullName() {
    return `${this.user.name} ${this.user.prenom}`;
  }
}
