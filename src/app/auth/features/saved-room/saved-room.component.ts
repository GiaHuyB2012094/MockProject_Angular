import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, switchMap } from 'rxjs';
import { IBreadcrumb } from 'src/app/core/models/interfaces/IBreadcrumb.interface';
import { IUser } from 'src/app/core/models/interfaces/IUser.interface';
import { RoomsService } from 'src/app/core/services/api/rooms.service';
import { SaveRoomService } from 'src/app/core/services/api/save-room.service';
import { UserState } from 'src/app/core/store/states/user.state';

@Component({
  selector: 'app-saved-room',
  templateUrl: './saved-room.component.html',
  styleUrls: ['./saved-room.component.scss']
})
export class SavedRoomComponent implements OnInit{
  breadcrumbs: IBreadcrumb[] = [
    {label: 'saved', link: '/saved-rooms'},
  ];
  
  
  currentUser!: IUser;
  user$!: Observable<any>;
  rooms: any;
  savedRoomIDList: any;
  saveRoomRecored: any;

  constructor(
    private saveRoomService: SaveRoomService,
    private roomService: RoomsService,
    private store: Store,

  ) {
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getSaveOfUser();
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
        .pipe(
          switchMap((data) => {
            this.savedRoomIDList = data.map((d: { roomID: any; }) => d.roomID);
            return this.roomService.getRooms();
          })
        )
        .subscribe({
          next: (data) => {
              this.rooms = data.filter((r: { id: number; }) => this.savedRoomIDList.includes(r.id))
              // this.saveRoomRecored = data?.find((save: { roomID: number; }) => save.roomID === this.id);
              // this.isActiveHeart = !!this.saveRoomRecored;
          },
          error: (err) => console.log(err),
        })
    return;
  }
}
