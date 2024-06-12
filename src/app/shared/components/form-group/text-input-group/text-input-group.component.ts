import { AfterViewChecked, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input-group',
  templateUrl: './text-input-group.component.html',
  styleUrls: ['./text-input-group.component.scss'],
})
export class TextInputGroupComponent implements OnInit, AfterViewChecked {
  @Input() id = '';
  @Input() required = false;
  @Input() type = 'text';
  @Input() control = new FormControl();
  @Input() label = '';
  @Input() isAutoValidators = true;
  @Input() disabled = false;
  @Input() changeDirection = false;
  @Input() iconRight = false;
  @Input() checked = false;
  @Input() placeholder = '';
  @Input() min = 0; 
  @Input() max = 1000000000; 

  @ContentChild('iconRef') iconRef!: ElementRef;
  @ViewChild('inputRef') inputRef!: ElementRef;
  
  fieldTextType: boolean = true;

  errorMessages: Record<string, string> = {};

  constructor() {}

  ngOnInit(): void {
    this.errorMessages = {
      required: 'The field is required',
      email: 'The e-mail is invalid',
      requiredTrue: 'Accept Terms is required',
      passwordMismatch: 'The passwords do not match',
    };
  }

  ngAfterViewChecked(): void {
    this.errorMessages['minlength'] = `This field must have at least ${
      this.control.errors?.['minlength']?.['requiredLength']
        ? this.control.errors?.['minlength']?.['requiredLength']
        : 6
    } character`;
    this.errorMessages['maxlength'] = `This field must have at least ${
      this.control.errors?.['maxlenght']?.['requiredLength']
        ? this.control.errors?.['maxlength']?.['requiredLength']
        : 25
    } character`;

    this.checkiconProjectedContentEmpty();
    
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  checkiconProjectedContentEmpty(): void {
    if (this.iconRef && this.iconRight === false) {
      this.inputRef.nativeElement.style.paddingLeft = '32px'
    } else if (this.iconRef && this.iconRight) {
      this.inputRef.nativeElement.style.paddingRight = '32px'
    }
  }
}
