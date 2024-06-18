import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/api/user.service';

@Component({
  selector: 'app-evaluations-card',
  templateUrl: './evaluations-card.component.html',
  styleUrls: ['./evaluations-card.component.scss']
})
export class EvaluationsCardComponent implements OnInit {
  @Input() evaluation : any;
  isLoading = true;
  user: any;
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUserById(this.evaluation.userID).subscribe(
      data => {
        this.isLoading = false;
        this.user = data;
      }
    )
  }
}
