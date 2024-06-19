import { AfterViewChecked, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements AfterViewChecked{
  @Input('tabTitle') title!: string;
  @Input() active = false;

  constructor(private cdr: ChangeDetectorRef){}

  ngAfterViewChecked(): void {
    this.active = this.active;

    this.cdr.detectChanges();
  }
}
