import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/core/services/api/comments.service';
import { IComment } from 'src/app/core/models/interfaces/IComment.interface';
@Component({
  selector: 'app-comment-review-room',
  templateUrl: './comment-review-room.component.html',
  styleUrls: ['./comment-review-room.component.scss']
})
export class CommentReviewRoomComponent implements OnInit{
  @Input() room: any;
  comments!: IComment[];
  excellentPercentTotal!: number;

  constructor(private commentService: CommentsService){}

  ngOnInit(): void {
    this.commentService.getCommentsByRoomID(this.room.id)
      .subscribe(data=> {this.comments = data; });
    this.excellentPercentTotal = this.room.satisfactionScore.reduce((sum: any, currI: { score: any; }) => sum + currI.score,0)
  }

  commentHandle(): void{

  }

  setCommentAfterCreate(e:any): void{
    this.comments.push(e[e.length-1]);
  }
}
