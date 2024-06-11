import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  constructor(private commentService: CommentsService){}
  
  formGroup = new FormGroup({
    comment: new FormControl(''),
  })

  ngOnInit(): void {
    this.commentService.getCommentsByRoomID(this.roomID)
      .subscribe(data=> this.comments = data);
  }

  commentHandle(): void{

  }
}
