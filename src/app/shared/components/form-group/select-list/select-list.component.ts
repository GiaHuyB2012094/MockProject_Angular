import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface ISelectOption {
  label: string;
  value: any;
  icon?: string;
  img?: string;
}

@Component({
  selector: 'select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss'],
})
export class SelectListComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() control = new FormControl();

  @Input() options: ISelectOption[] = [];
}
