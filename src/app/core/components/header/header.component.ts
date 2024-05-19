import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/api/user.service';
import { Router } from '@angular/router';
import { headerMenu } from '../../constants/titles/header.constant';
import { languages } from '../../constants/titles/languagesTranlate';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Language {
  value: string;
  label: string;
  img: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  isLoggedIn: boolean = false;
  headerMenu = headerMenu;
  languages = languages;
  langChoose = languages[0];

  isOpenLanguageOption = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  formGroup = new FormGroup({
    option: new FormControl('defaultValue', Validators.required),
  });

  username: string = '';
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.username = this.getCurrentUsername();
    this.isLoggedIn = this.userService.isLoggedIn();
    console.log(this.languages);
  }

  getCurrentUsername() {
    const user = this.userService.getCurrentUser();
    return user.username;
  }

  navigateToLogin() {
    this.router.navigate(['account', 'login']);
  }

  chooseLanguageHandle(lang: Language): void {
    this.langChoose = lang;
  }
}
