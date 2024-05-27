import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit{
  @Input() arrItems!: Array<string | number>;
  @Output() newItemEvent = new EventEmitter<any>();
  @ViewChildren('itemRef') itemRef!: QueryList<ElementRef>;

  arrChoosedItems: Array<string | number> = [];
  
  constructor(){}

  ngOnInit(): void {
    
  }

  chooseItemHandle(item: string | number): void {
    this.newItemEvent.emit(this.arrChoosedItems);
    
    const elementItemRef = this.itemRef.toArray().find(i => i.nativeElement.innerText === item)
   
    if (this.arrChoosedItems.includes(item)) {
      this.arrChoosedItems = this.arrChoosedItems.filter(i => i !== item);
      elementItemRef?.nativeElement.classList.remove('active');
    } else {
      this.arrChoosedItems.push(item)
        elementItemRef?.nativeElement.classList.add('active');
    }
    console.log(this.arrChoosedItems);
  }

}
