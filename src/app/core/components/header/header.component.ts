import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/api/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { headerMenu } from '../../constants/titles/header.constant';
import { languages } from '../../constants/titles/languagesTranlate';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { TOAST_STATE } from '../../constants/toast.constant';
import { ThemeService } from 'src/app/Theme/theme.service';

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
export class HeaderComponent implements OnInit, AfterViewChecked {
  isMenuOpen: boolean = false;
  isLoggedIn: boolean = false;
  headerMenu = headerMenu;
  languages = languages;
  langChoose = languages[0];

  isOpenLanguageOption = false;
  currentUser: any;

  currentPath: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  formGroup = new FormGroup({
    option: new FormControl('defaultValue', Validators.required),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private toast: ToastService,
    private themeService: ThemeService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
    this.isLoggedIn = this.userService.isLoggedIn();


  }

  ngAfterViewChecked(): void {
    // this.activatedRoute.url.subscribe(segments => {
    //   const path = segments.map
    // })  
  }

 

  getCurrentUser() {
    this.currentUser = this.userService.getCurrentUser();
  }

  navigateToLogin() {
    this.router.navigate(['account', 'login']);
  }

  chooseLanguageHandle(lang: Language): void {
    this.langChoose = lang;
  }

  logoutHandle() {
    this.userService.logout();
    this.toast.showToast(TOAST_STATE.success, 'You have successfully logout!');
    this.dismissError();
    this.navigateToLogin();
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  private dismissError(): void {
    setTimeout(() => {
      this.toast.dismissToast();
    }, 2000);
  }

  changeThemeModeHandle(e: boolean) {
    const active = this.themeService.getActiveTheme();
    if (e === true) {
      this.themeService.setTheme('dark');
    } else if (e === false) {
      this.themeService.setTheme('light');
    }
    console.log(this.themeService.getActiveTheme());
  }
}
