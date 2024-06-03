import { AfterViewChecked, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { payFormat } from 'src/app/core/constants/titles/room-type.constant';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';
import { IServices } from 'src/app/core/models/interfaces/IServices.interface';
import { RoomServicesService } from 'src/app/core/services/api/room-services.service';

@Component({
  selector: 'app-request-booking',
  templateUrl: './request-booking.component.html',
  styleUrls: ['./request-booking.component.scss']
})
export class RequestBookingComponent implements AfterViewChecked{
  @Input() room!: IRoom;
  
  payFormat = payFormat;
  currentDay = new Date();
  checkOutDate = new Date();
  roomRootPrice!: number;
  roomServices: IServices[] = [];
  servicePrice: number = 0;
  choosedService!: IServices;
  serviceQuantity = 0;
  priceFormat: string = 'hours';
  choosedServices:string = '';
  checkinAndCheckoutPrice!: number;
  // output services prices
  servicesFees: any = [];
  checkinAndCheckout: any = Object.assign({},{
    fromDate : new Date(),
    toDate : new Date() 
  }) 

  constructor(
    private roomServicesService: RoomServicesService,
    private cdr: ChangeDetectorRef, 
  ) {}

  formGroup = new FormGroup({
    duration: new FormControl(1),
    checkInDate: new FormControl((new Date()).toISOString().substring(0,10)),
    checkInTime: new FormControl((new Date()).toISOString().substring(11,16)),
  })

  
  ngOnInit(): void {
    this.getRoomServices()
    this.checkOutDate.setDate(this.currentDay.getDate() + 1);
    this.checkinAndCheckoutPrice = this.room.price[0];
    this.roomRootPrice = this.room.price[0];

    this.formGroup.valueChanges.subscribe(value => {
      this.onFormChange(value);
    });
  }

  ngAfterViewChecked(): void {
    console.log(this.checkOutDate)
  }

  onFormChange(value: any) {
    this.setNewCheckinAndCheckout();
    this.setNewCheckoutDate();
    this.cdr.detectChanges();

  }

  getRoomServices(): void {
    this.roomServicesService.getRoomServices().subscribe(
      data => {
        this.roomServices = data;
        this.choosedService = data[0];
        this.servicePrice = data[0].price;
      }
    );
  }

  setNewCheckoutDate(): void{
    const durationTemp = this.formGroup.value.duration;
    const checkoutDateTemp = this.formGroup.value.checkInDate;

    if (checkoutDateTemp !== undefined && checkoutDateTemp !== null 
      && durationTemp !== undefined && durationTemp !== null 
    ) {
      const date = new Date(checkoutDateTemp);
      const newDate = new Date()
      if (this.priceFormat !== 'hour') {
        newDate.setDate(date.getDate() + durationTemp);
        this.checkOutDate = newDate;
      } 
    }


    this.cdr.detectChanges();
  }

  setNewCheckinAndCheckout(): void{
    const durationTemp:any = this.formGroup.value.duration;

    if (durationTemp > 0) {
      this.checkinAndCheckoutPrice = durationTemp * this.roomRootPrice;
    }

    this.cdr.detectChanges();
  }

  chooseRoomServicesHandle(e: number) {
    this.servicePrice = this.roomServices[e].price;
    this.choosedService = this.roomServices[e];

    // this.serviceQuantity = 0;
  }

  choosePriceFormatHandle(e: string){
    this.checkinAndCheckoutPrice = this.room.price[this.convertPriceFormat(e)];
    this.roomRootPrice = this.room.price[this.convertPriceFormat(e)];
    // this.setNewCheckinAndCheckout();
    this.formGroup.get('duration')?.patchValue(1);
    this.priceFormat = e;
  }

  addServiceHandle():void {
    if (this.serviceQuantity !== 0) {
      let sevItem: any =  this.servicesFees.find((sv: { name: string; }) => sv.name === this.choosedService.label) 
      if (sevItem) {
        this.servicesFees[sevItem.id - 1] = {
          id: sevItem.id,
          name: this.choosedService.label,
          quantity: this.serviceQuantity,
          totalPrice: this.serviceQuantity * this.servicePrice,
        }
      } else {
        this.servicesFees.push({
          id: this.servicesFees.length+1,
          name: this.choosedService.label,
          quantity: this.serviceQuantity,
          totalPrice: this.serviceQuantity * this.servicePrice,
        })
      }
    } else {
      alert('100120')
    }

  }
  deleteServiceHandle(id :number): void{
    let servicesFeesTemp = [...this.servicesFees];
    servicesFeesTemp.splice(id-1, 1);
    this.servicesFees = [...servicesFeesTemp];
  }
  convertPriceFormat(priceFormat: string): number{
    return this.payFormat.findIndex(pr => pr.value === priceFormat)
  }
}
