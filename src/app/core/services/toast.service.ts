import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TOAST_STATE } from '../constants/toast.constant';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public showsToast$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public toastMessage$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Default Toast Message'
  );
  public toastState$: BehaviorSubject<string> = new BehaviorSubject<string>(
    TOAST_STATE.success
  );

  constructor() {}

  showToast(toastState: string, toastMessage: string): void {
    this.toastState$.next(toastState);

    this.toastMessage$.next(toastMessage);

    this.showsToast$.next(true);
  }

  dismissToast(): void {
    this.showsToast$.next(false);
  }
}
