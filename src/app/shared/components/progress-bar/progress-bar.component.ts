import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements AfterViewChecked, OnInit{
  @Input() percent = 0;
  @ViewChild('progressPercent') progressPercent!: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.progressPercent.nativeElement.style.width = `${this.percent}%`;
    
  }
}
