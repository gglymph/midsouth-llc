import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {
  @Input() imgs: any[] = [];
  @Input() currentImageIndex = 0;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeGallery() {
    this.close.emit();
  }

  scrollRight() {
    const imgsLenth = this.imgs.length - 1;
    if (this.currentImageIndex + 1 > imgsLenth)
      this.currentImageIndex = 0;
    else
      this.currentImageIndex++;
  }

  scrollLeft() {
    const imgsLenth = this.imgs.length - 1;
    if (this.currentImageIndex - 1 < 0)
      this.currentImageIndex = imgsLenth;
    else
      this.currentImageIndex--;
  }

}
