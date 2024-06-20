import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective implements OnChanges {
  @Input() appAvatar!: string;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appAvatar'] && this.appAvatar) {
      const firstLetter = this.appAvatar.split(' ').map(name => name.charAt(0)).join('');
      this.el.nativeElement.textContent = firstLetter;
      this.el.nativeElement.style.backgroundColor = this.getRandomColor();
      this.el.nativeElement.style.color = '#fff';
      this.el.nativeElement.style.fontWeight = 'bold';
      this.el.nativeElement.style.display = 'flex';
      this.el.nativeElement.style.justifyContent = 'center';
      this.el.nativeElement.style.alignItems = 'center';
      this.el.nativeElement.style.textTransform = 'uppercase';

    }
  }
  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
