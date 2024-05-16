import { Component } from '@angular/core';
import { UserService } from '../core/services/api/user.service';
import { Perform } from '../core/models/classes/perform';
import { IUser } from '../core/models/interfaces/IUser.interface';

@Component({
  selector: 'app-in-memory-api-demo',
  templateUrl: './in-memory-api-demo.component.html',
  styleUrls: ['./in-memory-api-demo.component.scss']
})
export class InMemoryApiDemoComponent {
  data = new Perform<IUser[]>();
  constructor(private userService : UserService) {
   this.data.load(this.userService.getUsers()) 
   console.log(this.data)
  }
}
