import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-images-room',
  templateUrl: './show-images-room.component.html',
  styleUrls: ['./show-images-room.component.scss']
})
export class ShowImagesRoomComponent implements OnInit{
  @Input() roomImgs!: string[];

  choosedRoomImg: string = '';
  isOpenShow = false;
  isExpendShow = false;

  constructor(){
  }

  ngOnInit(): void {
    this.choosedRoomImg = this.roomImgs[0];
  }

  showRoomsImgHandle(): void{
    this.isOpenShow = !this.isOpenShow;
  }

  showExpendRoomsImgHandle(): void{
    this.isExpendShow = !this.isExpendShow;
    
  }

  setChoosedRoomImg(roomImg: string): void{
    this.choosedRoomImg = roomImg;
  }
}
