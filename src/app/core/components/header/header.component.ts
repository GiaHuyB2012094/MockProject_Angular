import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/api/user.service';
import { Perform } from '../../models/classes/perform';
import { IUser } from '../../models/interfaces/IUser.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isMenuOpen: boolean = false;
  isLoggedIn: boolean = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

  username: string = '';
  constructor (
    private userService: UserService,
    private router: Router,
  ) {}
  
  ngOnInit(): void {
    this.username = this.getCurrentUsername()
    this.isLoggedIn = this.userService.isLoggedIn()
  }

  getCurrentUsername(){
    const user = this.userService.getCurrentUser()
    return user.username
  }

  navigateToLogin(){
    this.router.navigate(['account','login']);
  }

}
