import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/core/models/interfaces/IComment.interface';
import { CommentsService } from 'src/app/core/services/api/comments.service';

@Component({
  selector: 'app-comment-group',
  templateUrl: './comment-group.component.html',
  styleUrls: ['./comment-group.component.scss']
})
export class CommentGroupComponent implements OnInit, AfterViewChecked{
  @Input() comment!:IComment;

  constructor(private commentService: CommentsService){}

  childComments: any = [];

  ngOnInit(): void {
    this.commentService.comments$.subscribe(
      data => this.childComments = data,
    )
   
    this.commentService.getCommentsReply(this.comment.id, this.comment.roomID)
      .subscribe(data => this.childComments = data);
  }

  ngAfterViewChecked(): void {
    console.log(this.childComments)
  }
}

