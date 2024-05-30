import { AfterViewChecked, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBreadcrumb } from 'src/app/core/models/interfaces/IBreadcrumb.interface';
import { IRoom } from 'src/app/core/models/interfaces/IRoom.interface';
import { RoomsService } from 'src/app/core/services/api/rooms.service';

@Component({
  selector: 'app-general-room',
  templateUrl: './general-room.component.html',
  styleUrls: ['./general-room.component.scss']
})
export class GeneralRoomComponent implements OnInit, AfterViewChecked {
  rooms: IRoom[] = [];
  isLoading: boolean = true;
  breadcrumbs: IBreadcrumb[] = [
    {label: 'hotel', link: '/room/general-rooms'},
  ];
  filterOptions: any;
  searchKey!: any;
  roomFiltered!: IRoom[];

  constructor(
    private roomsService: RoomsService, 
    private activatedRotue: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getRooms()
    this.getSearchKeyQueryParams();
    this.roomFiltered = [...this.rooms];
  }
  ngAfterViewChecked(): void {
    this.updateRoomFiltered()
  }
  
  getRooms(): void {
    this.roomsService.getRooms().subscribe(
      data => {
        this.rooms = data;
        this.isLoading = false;
      }
    );
  }

  getSearchKeyQueryParams(): void {
    this.activatedRotue.queryParamMap
      .subscribe(param => this.searchKey = param.get('search'))
  }

  setFilterOptions(e: any): void {
    this.filterOptions = e;
  }

  updateRoomFiltered(): void {
    if (this.searchKey) {
      if(this.searchKey === undefined || this.searchKey === null || this.searchKey === ''){
        this.roomFiltered = [...this.rooms];
      } else {
        this.roomFiltered = this.rooms 
                              .filter(r => r.name.toLocaleLowerCase()
                              .includes(this.searchKey.toLocaleLowerCase()))
      }
    }
    else if (this.filterOptions)  {
      const roomFilteredItem = this.rooms.filter((r) => 
        (this.checkRoomsBranch(r.branch) && 
          this.checkRoomType(r.roomType) &&
          this.checkConveniences(r.convenient) &&
          this.checkRoomPrice(r.price)
        ))
     
      if (roomFilteredItem !== undefined || null) {
        this.roomFiltered = [...roomFilteredItem]
      }
    } else this.roomFiltered = [...this.rooms];
    this.cdr.detectChanges();
  }

  checkRoomsBranch(b: number): boolean{
    if (this.filterOptions.branch === 0) {
      return true;
    } else {
      return b === this.filterOptions.branch;
    }
    return true;
  }

  checkRoomType(r: string): boolean{
    if (this.filterOptions.roomType === '') {
      return true;
    } else {
      return this.filterOptions.roomType === r; 
    }
    return true;
  }
  
  checkRoomPrice(p: Array<number>): boolean{
    return p[this.filterOptions.priceFormat] > this.filterOptions.price;
  }

  checkConveniences(c: Array<string>): boolean{
    if (this.filterOptions.convenients.length === 0) {
      return true;
    } else {
      const convenientsFilter = this.filterOptions.convenients;
      return convenientsFilter.every((conv: string) => c.includes(conv)); 
    }
    return true;
  }
}
