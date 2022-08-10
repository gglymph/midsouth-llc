import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  images = [
      {
        header: 'PROJECT GRADING',
        img: 'assets/gallery/IMG_1623.jpg'
      },
      {
        header: 'PROJECT TRUCK',
        img: 'assets/gallery/IMG_1788.jpg'
      },
      {
        header: 'PROJECT ',
        img: 'assets/gallery/IMG_8855.jpg'
      },
      {
        header: 'PROJECT 4',
        img: 'assets/gallery/IMG_8856.jpg'
      },
      {
        header: 'PROJECT 5',
        img: 'assets/gallery/IMG_8857.jpg'
      },
      {
        header: 'PROJECT 6',
        img: 'assets/gallery/IMG_8858.jpg'
      }
  ]

  currentIndex = 0;
  showGallery = false;

  constructor() { }

  ngOnInit() {
  }

  scrollTo(anchor: string) {
    const el = document.getElementById(anchor);
    el?.scrollIntoView({behavior: 'smooth'});
  }

  openGallery(index: number) {
    this.currentIndex = index;
    this.showGallery = true;
  }

}
