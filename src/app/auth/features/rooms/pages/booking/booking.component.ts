import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IBreadcrumb } from 'src/app/core/models/interfaces/IBreadcrumb.interface';
import { IUser } from 'src/app/core/models/interfaces/IUser.interface';
import { RoomsService } from 'src/app/core/services/api/rooms.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { UserState } from 'src/app/core/store/states/user.state';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  // @Select()

  room: any;
  isLoading = true;

  breadcrumbs: IBreadcrumb[] = [{ label: 'rooms', link: '/rooms' }];
  roomID!: number;
  currentUser!: any;

  constructor(
    private roomsService: RoomsService,
    private activeRoute: ActivatedRoute,
    private store: Store,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.roomID = Number(params.get('id'));
      this.getRoomData();
    });

    this.getCurrentUser();
  }

  getRoomData(): void {
    this.roomsService.getRoomById(this.roomID).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.room = data;
        this.breadcrumbs.push(
          {
            label: `${data.name}`,
            link: `/room/room-detail/${data.id}`,
          },
          { label: 'booking', link: `/room/booking/${data.id}` }
        );
      },
      error: (err) => console.log(err),
    });
  }

  getCurrentUser() {
    // this.currentUser = this.store.select(UserState.loggedInUser);
    // this.currentUser.subscribe((data) => {
    //   console.log(data);
    // });
    this.currentUser = this.userService.getCurrentUser();
    console.log(this.currentUser);
  }
}
