import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/core/models/interfaces/IComment.interface';
import { IUser } from 'src/app/core/models/interfaces/IUser.interface';
import { CommentsService } from 'src/app/core/services/api/comments.service';
import { UserService } from 'src/app/core/services/api/user.service';
import { UserState } from 'src/app/core/store/states/user.state';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, AfterViewChecked{
  @Input() comment!:IComment;
  isLoading = true;
  userComment: any;
  avarageScore:any;

  user$!: Observable<IUser>;
  currentUser!: IUser;

  canEditComment = false;
  canReply = false;

  formGroup = new FormGroup({
    newComment: new FormControl(''),
  })

  constructor(
    private userService: UserService,
    private store: Store,
    private commentService: CommentsService,
  ){}

  ngOnInit(): void {
    this.getUserByID();
    this.getCurrentUser();

    this.avarageScore = this.comment.avarageScore?.toFixed(1) ;
  }
  
  ngAfterViewChecked(): void {
    
    if(this.currentUser?.id === this.userComment?.id){
      this.canEditComment = true;
    }
  }

  getCurrentUser = async() => {
    this.user$ = this.store.select(UserState.user);
    await this.user$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  getUserByID = async() =>{
    await this.userService.getUserById(this.comment.userID)
      .subscribe(data => {
        this.userComment = data
        this.isLoading = false;
      });
  }

  // reply_comment
  replyCommnetHandle() {
    const now = new Date()

    const commentData = {
        userID: this.comment.userID,
        roomID: this.comment.roomID,
        username:this.comment.username,
        body: this.formGroup.value.newComment,
        parentID : this.comment.id,
        
        createdAt: now,
    }
    console.log(commentData)
    this.commentService.replyComment(commentData).subscribe({
      next: ()=>{console.log('reply successfully')},
      error: (err) => {console.log(err);}
    });
  }
}
