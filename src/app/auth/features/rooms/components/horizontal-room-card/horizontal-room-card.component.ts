import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { payFormat } from 'src/app/core/constants/titles/room-type.constant';
import { IUser } from 'src/app/core/models/interfaces/IUser.interface';
import { SaveRoomService } from 'src/app/core/services/api/save-room.service';
import { UserState } from 'src/app/core/store/states/user.state';

@Component({
  selector: 'app-horizontal-room-card',
  templateUrl: './horizontal-room-card.component.html',
  styleUrls: ['./horizontal-room-card.component.scss']
})
export class HorizontalRoomCardComponent implements OnInit, AfterViewChecked{
  @Input() id!: number 
  @Input() img: string = ''
  @Input() name: string = ''
  @Input() branch: number = 1
  @Input() price: number[] = []
  @Input() address: string = ''
  @Input() desc: string = ''
  @Input() level: string = ''

  isActiveHeart = false;

  currentUser!: IUser;
  user$!: Observable<any>;
  
  saveRoomRecored: any;

  constructor(
    private saveRoomService: SaveRoomService,
    private store: Store,

  ) {
  }

  payFormat = payFormat;

  ngOnInit(): void {
    this.getCurrentUser();
    this.getSaveOfUser();
  }

  ngAfterViewChecked(): void {
    
  }

  getCurrentUser() {
      this.user$ = this.store.select(UserState.user);
      this.user$.subscribe((user) => {
        this.currentUser = user
      });
  }
 
  getSaveOfUser() {
    if(this.currentUser.id) 
      this.saveRoomService.getSaveOfUser(this.currentUser.id)
        .subscribe({
          next: (data) => {
              this.saveRoomRecored = data?.find((save: { roomID: number; }) => save.roomID === this.id);
              this.isActiveHeart = !!this.saveRoomRecored;
          },
          error: (err) => console.log(err),
        })
    return;
  }

  handleSaveHeart(): void{
    if (!!this.saveRoomRecored) {
      this.saveRoomService.deleteSaveRoom(this.saveRoomRecored.id)
        .subscribe({
          next: () => {console.log('delete save successfully');},
          error: (err) => console.log(err),
        })
    } else {
      if(this.currentUser.id)
          this.saveRoomService.createSaveRoom(this.currentUser.id, this.id)
          .subscribe({
            next: (data) => {
              console.log('the room saved successfully');
              this.saveRoomRecored = data;
            },
            error: (err) => console.log(err),
          })
    }
    this.isActiveHeart = !this.isActiveHeart;
  }
}
