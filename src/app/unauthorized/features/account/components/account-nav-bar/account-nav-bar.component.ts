import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { accountNavbar } from 'src/app/core/constants/titles/account-navbar.constant';

@Component({
  selector: 'app-account-nav-bar',
  templateUrl: './account-nav-bar.component.html',
  styleUrls: ['./account-nav-bar.component.scss']
})
export class AccountNavBarComponent {
  accountNavbar = accountNavbar;
  isMenuOpen = false;



  constructor(private router: Router) {}
  navigateToLink(value: string){
    alert(value)
    this.router.navigate(['/login'])
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
