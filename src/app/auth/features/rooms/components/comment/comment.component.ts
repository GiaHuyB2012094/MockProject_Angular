import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/core/models/interfaces/IComment.interface';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{
  @Input() comment!:IComment;
  isLoading = true;
  constructor(private userService: UserService){}
  user: any;

  ngOnInit(): void {
    this.getUserByID();
  }

  getUserByID(): void{
    this.userService.getUserById(this.comment.userID)
      .subscribe(data => {
        this.user = data
        this.isLoading = false;
      });
  }
}
