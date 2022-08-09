import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
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
