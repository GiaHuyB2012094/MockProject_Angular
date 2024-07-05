import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LangActions } from './core/store/actions/lang.action';
import { ThemeService } from './Theme/theme.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'mockproject';
  constructor(
    private store: Store, 
    private themeService: ThemeService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.store.dispatch(new LangActions.SwitchLanguage('en'));
    // automatically scroll to the top of page when the router changes
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: "smooth"})
      }
    })
  }

  ngAfterViewChecked(): void {
    const active = this.themeService.getActiveTheme();
  }
  toggle() {
    const active = this.themeService.getActiveTheme();
    console.log(active.name);
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
}
