import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectCards } from 'swiper';


SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectCards]);


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None


})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
