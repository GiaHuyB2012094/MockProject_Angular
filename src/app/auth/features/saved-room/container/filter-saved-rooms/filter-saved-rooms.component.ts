import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-saved-rooms',
  templateUrl: './filter-saved-rooms.component.html',
  styleUrls: ['./filter-saved-rooms.component.scss']
})
export class FilterSavedRoomsComponent {

  formGroup = new FormGroup({
    search: new FormControl(''),
  })

  
  searchHandle(): void{
    let searchKey: any = this.formGroup.value.search;
    console.log(searchKey.trim().length !== 0)
    // if (searchKey.trim().length !== 0 || searchKey.trim() !== '') {
    //   this.router.navigate(['room','general-rooms'], {queryParams: {search: searchKey}})
    // } else this.router.navigate(['room','general-rooms']);
  }
}
