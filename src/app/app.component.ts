import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LangActions } from './core/store/actions/lang.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mockproject';
    constructor(private store: Store) {
   
  }
    ngOnInit(): void {
      this.store.dispatch(new LangActions.SwitchLanguage('en'))
    }

   
  }
