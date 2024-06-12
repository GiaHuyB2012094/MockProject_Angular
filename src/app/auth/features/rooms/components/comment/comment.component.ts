import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/core/models/interfaces/IComment.interface';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, AfterViewChecked{
  @Input() comment!:IComment;
  isLoading = true;
  user: any;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUserByID();
  }
  ngAfterViewChecked(): void {
    console.log(this.comment);
  }
  getUserByID(): void{
    this.userService.getUserById(this.comment.userID)
      .subscribe(data => {
        this.user = data
        this.isLoading = false;
      });
  }

  
}
