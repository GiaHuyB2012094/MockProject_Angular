import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LangActions } from './core/store/actions/lang.action';
import { ThemeService } from './Theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked{
  title = 'mockproject';
    constructor(private store: Store, private themeService: ThemeService) {
  }
    ngOnInit(): void {
      this.store.dispatch(new LangActions.SwitchLanguage('en'))
    }
    ngAfterViewChecked(): void {
      const active = this.themeService.getActiveTheme() ;
      console.log(active)
    }
    toggle() {
      const active = this.themeService.getActiveTheme() ;
      console.log(active.name)
      if (active.name === 'light') {
        this.themeService.setTheme('dark');
      } else {
        this.themeService.setTheme('light');
      }
    }
   
  }
