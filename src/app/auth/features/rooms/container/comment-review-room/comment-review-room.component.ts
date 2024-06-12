import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/core/services/api/comments.service';
import { IComment } from 'src/app/core/models/interfaces/IComment.interface';
@Component({
  selector: 'app-comment-review-room',
  templateUrl: './comment-review-room.component.html',
  styleUrls: ['./comment-review-room.component.scss']
})
export class CommentReviewRoomComponent implements OnInit{
  @Input() roomID!: number;
  comments!: IComment[];
  excellentPercent = 80;

  constructor(private commentService: CommentsService){}

  ngOnInit(): void {
    this.commentService.getCommentsByRoomID(this.roomID)
      .subscribe(data=> this.comments = data);
  }

  commentHandle(): void{

  }
  setCommentAfterCreate(e:any): void{
    this.comments.push(e[e.length-1]);
  }
}
