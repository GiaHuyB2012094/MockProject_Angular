import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/core/services/api/comments.service';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'app-customer-evaluations',
  templateUrl: './customer-evaluations.component.html',
  styleUrls: ['./customer-evaluations.component.scss']
})
export class CustomerEvaluationsComponent implements OnInit{
  evaluations: any;
  isLoading = true;
  constructor(private commentService: CommentsService,
    private userService: UserService,
  ){}
  ngOnInit(): void {
    this.commentService.getCommentsRandom().subscribe(data => {
      this.evaluations = data;
      this.isLoading = false;
    })
    
  }
}
