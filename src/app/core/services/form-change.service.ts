import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormChangeService {
  private formChanged = false;

  setFormChanged(value: boolean){
    this.formChanged = value;
  }

  getFormChaned(){
    return this.formChanged;
  }
  
  constructor() { }
}
