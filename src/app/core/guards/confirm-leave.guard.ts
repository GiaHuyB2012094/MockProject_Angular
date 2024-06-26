import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, Subject } from "rxjs";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ConfirmDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    private confirmationNeeded = false;
    private confirmationSubject = new Subject<boolean>();

    constructor() {}
  
    canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
        if (this.confirmationNeeded) {
          return new Observable<boolean>((observer) => {
            const confirmed = window.confirm('Sure you want to leave?');
            observer.next(confirmed);
            observer.complete();
          });
        } else {
          return true; 
        }
    }

    setConfirmationNeeded(confirmationNeeded: boolean) {
        this.confirmationNeeded = confirmationNeeded;
      }
    
    getConfirmationSubject(): Subject<boolean> {
        return this.confirmationSubject;
    }
  }