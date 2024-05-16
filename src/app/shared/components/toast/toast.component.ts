import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [    
    trigger('toastTrigger', [    
      state('open', style({ transform: 'translateX(0)' })), 
      state('close', style({ transform: 'translateX(150%)' })), 
      transition('open <=> close', [ 
        animate('600ms ease-in-out')
      ])    
    ])  
  ]
})
export class ToastComponent implements OnInit{
  toastClass : string[] =['s'];
  toastMessage : string = 's'; 
  showsToast: boolean = false; 

  constructor(public toast: ToastService) { }  

  ngOnInit(): void { }

  dismiss(): void {    
    this.toast.dismissToast();  
  }
}
