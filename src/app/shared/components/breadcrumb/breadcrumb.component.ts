import { Component, Input, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/models/interfaces/IBreadcrumb.interface';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit{
  @Input() arrBreadcrumbs!: IBreadcrumb[];

  constructor() {
  }

  ngOnInit(): void {
    this.arrBreadcrumbs.unshift(
      {label: 'home', link: '/home', icon: 'fa-solid fa-house'},
    )
  }


}
