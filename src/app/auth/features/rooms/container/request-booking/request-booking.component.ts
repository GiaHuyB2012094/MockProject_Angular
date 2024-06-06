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
  @Input() fromDate!: Date;
  @Input() toDate!: Date;
  @Input() duration!: number;
  @Input() roomPriceTotal!: number;
  @Input() services: any;
  @Input() priceFormat: any;
  @Input() tax!: number;
  @Output() newItemEvent = new EventEmitter<any>();

  payFormat = payFormat;
  currentDay = new Date();
  roomRootPrice!: number;
  roomServices: IServices[] = [];
  servicePrice: number = 0;
  choosedService!: IServices;
  serviceQuantity = 1;

  choosedServices:string = '';
  checkinAndCheckoutPrice!: number;
  isOpenCheckinTime = false;
  // output services prices
  servicesFees: any = [];
  otherReqs!: string;

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

    this.checkinAndCheckoutPrice = this.room.price[0];
    this.roomRootPrice = this.room.price[0];
    
    this.formGroup.valueChanges.subscribe(value => {
      this.onFormChange(value);
    });

  }

  ngAfterViewChecked(): void {
    const result: any = Object.assign({},{
      fromDate: this.fromDate,
      toDate: this.toDate,
      duration: this.duration,
      roomPriceTotal: this.roomPriceTotal,
      services: this.services,
      priceFormat: this.priceFormat,
      roomPrice: this.roomRootPrice,
      priceTotal: this.tax + this.calculateSerivePriceTotal() + this.roomPriceTotal,
      otherReqs: this.otherReqs,
    })

    if (this.isOpenCheckinTime) {
      result['checkInTime'] = this.formGroup.value.checkInTime;
    }

    this.newItemEvent.emit(result);
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

        // this.roomPriceTotal = data[0].price;
      }
    );
  }

  setNewCheckinAndCheckout(): void{
    const durationTemp = this.formGroup.value.duration || 0;
    const checkoutDateTemp = this.formGroup.value.checkInDate || '';
    
    const date = new Date(checkoutDateTemp);

    if (durationTemp > 0) {
      this.checkinAndCheckoutPrice = durationTemp * this.roomRootPrice;
      
      if (this.priceFormat !== 'hour') {
        this.toDate = new Date(date.getTime() + durationTemp * 86400000);
      } else {
        this.toDate = new Date(date.getTime() + 1 * 86400000);
      }
    } 
    
    // if (this.isOpenCheckinTime) {
    //   this.formGroup.value.checkInTime = this.formGroup.value.checkInTime;
    // } else {
    //   delete this.formGroup.value.checkInTime;
    // }

    this.fromDate = date;
    this.toDate = this.toDate;
    this.duration = durationTemp;
    this.roomPriceTotal = this.checkinAndCheckoutPrice;
    this.cdr.detectChanges();
  }
  

  chooseRoomServicesHandle(e: number) {
    this.servicePrice = this.roomServices[e].price;
    this.choosedService = this.roomServices[e];
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
      let sevItem: any =  this.services.find((sv: { name: string; }) => sv.name === this.choosedService.label) 

      if (sevItem) {
        this.services[sevItem.id - 1] = {
          id: sevItem.id,
          name: this.choosedService.label,
          quantity: this.serviceQuantity,
          totalPrice: this.serviceQuantity * this.servicePrice,
        }
      } else {
        this.services.push({
          id: this.services.length + 1,
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
    let servicesFeesTemp = [...this.services];

    servicesFeesTemp.splice(id - 1, 1);

    this.services = [...servicesFeesTemp];

    this.toast.showToast(
      TOAST_STATE.success,
      'You have successfully delete service.'
    );
    this.dismissError();
  }

  convertPriceFormat(priceFormat: string): number{
    return this.payFormat.findIndex(pr => pr.value === priceFormat)
  }

  calculateSerivePriceTotal(): number {
    return this.services.reduce((sum: number, currentService: any) => sum + currentService.totalPrice, 0);
  }
  private dismissError(): void {
    setTimeout(() => {
      this.toast.dismissToast();
    }, 2000);
  }
}


