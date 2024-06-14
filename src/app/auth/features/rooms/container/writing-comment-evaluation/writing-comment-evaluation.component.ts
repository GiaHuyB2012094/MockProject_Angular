import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TOAST_STATE } from 'src/app/core/constants/toast.constant';
import { IComment } from 'src/app/core/models/interfaces/IComment.interface';
import { IUser } from 'src/app/core/models/interfaces/IUser.interface';
import { CommentsService } from 'src/app/core/services/api/comments.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserState } from 'src/app/core/store/states/user.state';

@Component({
  selector: 'app-writing-comment-evaluation',
  templateUrl: './writing-comment-evaluation.component.html',
  styleUrls: ['./writing-comment-evaluation.component.scss']
})
export class WritingCommentEvaluationComponent implements OnInit, AfterViewChecked{
  @Input() roomID!: number;
  @Output() newItemEvent = new EventEmitter<any>();

  cleanlinessStarRating = 0;
  comfortStarRating = 0;
  foodStarRating = 0;
  locationStarRating = 0;
  serviceStarRating = 0;

  user$!: Observable<IUser>;
  currentUser!: IUser;

  commentByUser: any;
  openWritingCommentAvaluation = true;
  showYourComponent = false;

  constructor(
    private toast: ToastService,
    private store: Store,
    private commentSerivce: CommentsService,
  ) {}

  formGroup = new FormGroup({
    comment: new FormControl(''),
  })

  formGroupStatisfaction = new FormGroup({
    satisfactionLevel: new FormControl('excellent'),
  })

  ngOnInit(): void {
    this.getCurrentUser();
    this.getCommentsByRoomIDAndUserID();
  }

  ngAfterViewChecked(): void {
    console.log(this.commentByUser)
    if (this.commentByUser !== undefined) 
      this.openWritingCommentAvaluation = false; 
  }

  getCurrentUser = async() => {
    this.user$ = this.store.select(UserState.user);
    await this.user$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  getCommentsByRoomIDAndUserID() {
    console.log(this.roomID)

    this.commentSerivce.getCommentsByRoomIDAndUserID(this.currentUser.id || 0, this.roomID)
    .subscribe(data => this.commentByUser = data)
  }
  resetHanle():void {
    this.cleanlinessStarRating = 0;
    this.comfortStarRating = 0;
    this.foodStarRating = 0;
    this.locationStarRating = 0;
    this.serviceStarRating = 0;
    this.formGroup.get('comment')?.patchValue('');
    this.formGroupStatisfaction.get('satisfactionLevel')?.patchValue('excellent');
  }
  commentHandle(): void{
    const now = new Date()

    const commentData = {
        userID: this.currentUser.id,
        roomID: this.roomID,
        username: this.currentUser.username,
        body: this.formGroup.value.comment,
        parentID : null,
        rateSatisfaction : this.formGroupStatisfaction.value.satisfactionLevel,
        rateSerivces : [
          this.cleanlinessStarRating,
          this.comfortStarRating,
          this.foodStarRating,
          this.locationStarRating,
          this.serviceStarRating,
        ],
        
        createdAt: now,
    }

    let commentContent: any = this.formGroup.value.comment;
    let checkCommentContent = commentContent.trim().length !== 0 || commentContent.trim() !== '';
    let checkRatingServiceEmpty = this.cleanlinessStarRating === 0 
      || this.comfortStarRating === 0 
      || this.foodStarRating === 0
      || this.locationStarRating === 0
      || this.serviceStarRating === 0; 

    if (checkRatingServiceEmpty) {
      this.toast.showToast(
        TOAST_STATE.danger,
        'Please rate the services'
      );
      this.dismissError();
      return;
    }

    if (checkCommentContent) {
      this.commentSerivce.createComment(commentData, this.roomID)
        .subscribe({
          next: (data) => {
              this.newItemEvent.emit(data);
              this.resetHanle();
              console.log('create comment successfully');
          }, 
          error: () => console.log('create comment fail'), 
        })

    } else {
      this.toast.showToast(
        TOAST_STATE.danger,
        'Please enter content your comment'
      );
      this.dismissError();
      return;
    }
  }



  changeCleanlinessHandle(e: number): void{
    this.cleanlinessStarRating = e;
  }
  changeComfortHandle(e: number): void{
    this.comfortStarRating = e;

    }
  changeFoodHandle(e: number): void{

    this.foodStarRating = e;
    }
  changeLocationHandle(e: number): void{
    this.locationStarRating = e;

    }
  changeSerivceHandle(e: number): void{
    this.serviceStarRating = e;
    }
    private dismissError(): void {
      setTimeout(() => {
        this.toast.dismissToast();
      }, 2000);
    }
  }

  
