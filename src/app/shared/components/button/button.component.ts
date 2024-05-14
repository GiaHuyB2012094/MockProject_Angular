import { Component, HostBinding, Input, OnInit } from '@angular/core';

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
