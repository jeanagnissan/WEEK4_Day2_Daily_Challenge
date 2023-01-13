import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { User } from '../models/User.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  currentRoute: string = "";
  user: User = {
    name: "Paul Allen",
    prenom: "Karl Darm",
    email: "pk@gmail.com",
    profilePictureUrl: "https://www.universityofcalifornia.edu/sites/default/files/black-man-suit.jpg"
  }
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url.toString();
      console.log(this.currentRoute);
      });
    }

  ngOnInit(): void {
  }
}
