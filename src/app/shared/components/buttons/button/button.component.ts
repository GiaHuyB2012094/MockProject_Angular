import { Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'primary-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  disabled: true | false = false;

  @Input()
  outline: true | false = false;

  @Input()
  rounded: true | false = false;
// rounded
  @HostBinding('class.custom-button--rounded') 
    get getRounded() {return this.rounded === true}
// disable
  @HostBinding('class.custom-button--disabled') 
    get getDisabled() {return this.disabled === true}
// outline
  @HostBinding('class.custom-button--outline') 
    get getOutline() {return this.outline === true}
// size
  @HostBinding('class.custom-button--small') 
    get sizeSmall() {return this.size === 'small'}

  @HostBinding('class.custom-button--medium') 
    get sizeMedium() {return this.size === 'medium'}

  @HostBinding('class.custom-button--large') 
    get sizeLarge() {return this.size === 'large'}
  
  constructor() {}
  ngOnInit(): void {
    
  }
}