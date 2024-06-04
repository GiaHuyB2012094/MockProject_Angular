import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-pay',
  templateUrl: './booking-pay.component.html',
  styleUrls: ['./booking-pay.component.scss']
})
export class BookingPayComponent implements OnInit, AfterViewChecked{
  @Input() roomPrice!: number;
  @Input() room: any;
  @Input() duration!: number;
  @Input() priceFormat!: string;
  @Input() services: any;

  serviceTotal = 0;
  allPriceToal = 0;
  tax = 70000;
  showModal: boolean = false;
  ngOnInit(): void {
   }
  ngAfterViewChecked(): void {
    this.serviceTotal = this.calculateSerivePrice();  
    this.allPriceToal = this.calculateTotalPrice();  
  }
  openModal() {
    this.showModal = true;
  }
  
  closeModal() {
    this.showModal = false;
  }

  calculateSerivePrice(): number {
    return this.services.reduce((sum: number, currentService: any) => sum + currentService.totalPrice, 0);
  }

  calculateTotalPrice(): number {
    return this.roomPrice + this.serviceTotal + this.tax;
  }
}
