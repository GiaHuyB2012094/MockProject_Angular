import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements AfterViewChecked, OnInit{
  @Input() percent = 0;
  @Input() excellentPercentTotal = 0;

  finalPercent!: number;

  @ViewChild('progressPercent') progressPercent!: ElementRef;

  ngOnInit(): void {
    this.finalPercent = (this.percent / this.excellentPercentTotal)*100;
  }

  ngAfterViewChecked(): void {
    this.progressPercent.nativeElement.style.width = `${this.finalPercent}%`;
    
  }
}
