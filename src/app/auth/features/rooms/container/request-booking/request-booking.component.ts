import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { payFormat } from 'src/app/core/constants/titles/room-type.constant';
import { TOAST_STATE } from 'src/app/core/constants/toast.constant';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';
import { IServices } from 'src/app/core/models/interfaces/IServices.interface';
import { RoomServicesService } from 'src/app/core/services/api/room-services.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-request-booking',
  templateUrl: './request-booking.component.html',
  styleUrls: ['./request-booking.component.scss']
})
export class RequestBookingComponent implements AfterViewChecked{
  @Input() room!: IRoom;
  @Output() newItemEvent = new EventEmitter<any>();

  payFormat = payFormat;
  currentDay = new Date();
  roomRootPrice!: number;
  roomServices: IServices[] = [];
  servicePrice: number = 0;
  choosedService!: IServices;
  serviceQuantity = 0;
  priceFormat: string = 'hours';
  choosedServices:string = '';
  checkinAndCheckoutPrice!: number;
  checkOutDate = new Date();
  isOpenCheckinTime = false;
  // output services prices
  servicesFees: any = [];

  checkinAndCheckout: any = Object.assign({},{
    fromDate : new Date(),
    toDate : new Date(), 
    duration: 1,
    priceTotal: 0,
    priceFormat: 'hours',
    services: []
  }) 

  constructor(
    private roomServicesService: RoomServicesService,
    private cdr: ChangeDetectorRef, 
    private toast: ToastService, 
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

    this.checkinAndCheckout['toDate'] = new Date(this.currentDay.getTime() + 86400000);
  }

  ngAfterViewChecked(): void {
    this.newItemEvent.emit(this.checkinAndCheckout);
  }

  
  
  onFormChange(value: any) {
    this.setNewCheckinAndCheckout();
  }

  getRoomServices(): void {
    this.roomServicesService.getRoomServices().subscribe(
      data => {
        this.roomServices = data;
        this.choosedService = data[0];
        this.servicePrice = data[0].price;

        this.checkinAndCheckout.priceTotal = data[0].price;
      }
    );
  }

  setNewCheckinAndCheckout(): void{
    const durationTemp = this.formGroup.value.duration || 0;
    const checkoutDateTemp = this.formGroup.value.checkInDate || '';
    
    const date = new Date(checkoutDateTemp);

    if (durationTemp > 0) {
      this.checkinAndCheckoutPrice = durationTemp * this.roomRootPrice;
      
      if (this.priceFormat !== 'hours') {
        this.checkOutDate = new Date(date.getTime() + durationTemp * 86400000);
      } else {
        this.checkOutDate = new Date(date.getTime() + 1 * 86400000);
      }
    } 
    
    if (this.isOpenCheckinTime) {
      this.checkinAndCheckout.checkInTime = this.formGroup.value.checkInTime;
    } else {
      delete this.checkinAndCheckout.checkInTime;
    }

    this.checkinAndCheckout['fromDate'] = date;
    this.checkinAndCheckout['toDate'] = this.checkOutDate;
    this.checkinAndCheckout['duration'] = durationTemp;
    this.checkinAndCheckout['priceTotal'] = this.checkinAndCheckoutPrice;
    this.checkinAndCheckout['priceFormat'] = this.priceFormat;
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
      let sevItem: any =  this.checkinAndCheckout['services'].find((sv: { name: string; }) => sv.name === this.choosedService.label) 
      console.log(sevItem);

      if (sevItem) {
        this.checkinAndCheckout['services'][sevItem.id - 1] = {
          id: sevItem.id,
          name: this.choosedService.label,
          quantity: this.serviceQuantity,
          totalPrice: this.serviceQuantity * this.servicePrice,
        }
      } else {
        this.checkinAndCheckout['services'].push({
          id: this.checkinAndCheckout['services'].length+1,
          name: this.choosedService.label,
          quantity: this.serviceQuantity,
          totalPrice: this.serviceQuantity * this.servicePrice,
        })
      }

      this.toast.showToast(
        TOAST_STATE.success,
        'You have successfully add service.'
      );
      this.dismissError();

    } else {

      this.toast.showToast(
        TOAST_STATE.danger,
        'Please, select the number of service.'
      );
      this.dismissError();
    }

  }
  deleteServiceHandle(id :number): void{
    let servicesFeesTemp = [...this.checkinAndCheckout['services']];
    servicesFeesTemp.splice(id-1, 1);
    this.checkinAndCheckout['services'] = [...servicesFeesTemp];
    this.toast.showToast(
      TOAST_STATE.success,
      'You have successfully delete service.'
    );
    this.dismissError();
  }
  convertPriceFormat(priceFormat: string): number{
    return this.payFormat.findIndex(pr => pr.value === priceFormat)
  }

  private dismissError(): void {
    setTimeout(() => {
      this.toast.dismissToast();
    }, 2000);
  }
}


