import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent implements OnInit{
  @Input() arrItem !: any[];
  @Output() newItemEvent = new EventEmitter<any>();

  choosedItem!: any;

  isOpenDropdown = false;
  constructor() {}

  ngOnInit(): void {
    this.choosedItem = this.arrItem[0];
  }

  chooseHandle(r: any):void{
    this.newItemEvent.emit(r.value)

    this.choosedItem = r;
  }

  openOptionsHandle():void{
    this.isOpenDropdown = !this.isOpenDropdown;
  }
  
  


}
