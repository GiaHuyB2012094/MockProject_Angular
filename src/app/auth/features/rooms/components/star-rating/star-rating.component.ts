import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() readonly: boolean = false;

  @Output() newEventItem = new EventEmitter();
  ngOnInit(): void {
  }
  // get stars() {
  //   return Array(Math.floor(this.rating)).fill(0);
  // }
  setRating(a: number): void {
    if (this.readonly) return;
    this.rating = a;
    
    this.newEventItem.emit(this.rating);
  }
}
