import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-cancel-buttons',
  templateUrl: './cancel-buttons.component.html',
  styleUrls: ['./cancel-buttons.component.scss']
})
export class CancelButtonsComponent {
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
