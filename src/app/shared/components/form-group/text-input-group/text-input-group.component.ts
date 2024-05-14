import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input-group',
  templateUrl: './text-input-group.component.html',
  styleUrls: ['./text-input-group.component.scss']
})
export class TextInputGroupComponent implements OnInit, AfterViewChecked{
  @Input() id = '';
  @Input() type = 'text';
  @Input() control = new FormControl();
  @Input() label = '';
  @Input() isAutoValidators = true;
  @Input() disabled = false;
  @Input() changeDirection = false;
  @Input() placeholder = '';

  errorMessages: Record<string, string> = {};

  ngOnInit(): void {
    this.errorMessages = {
      required: 'The field is required',
      email: 'The e-mail is invalid',
      requiredTrue: 'Accept Terms is required',
    }
  }

  ngAfterViewChecked(): void {
    this.errorMessages['minlength'] = `This field must have at least ${this.control.errors?.['minlength']?.['requiredLength'] ? this.control.errors?.['minlength']?.['requiredLength'] : 6} character`
    this.errorMessages['maxlength'] = `This field must have at least ${this.control.errors?.['maxlenght']?.['requiredLength'] ? this.control.errors?.['maxlength']?.['requiredLength'] : 25} character`
  }

}