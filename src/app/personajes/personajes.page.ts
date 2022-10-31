import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectCards } from 'swiper';


SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectCards]);



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
  encapsulation: ViewEncapsulation.None
})


export class PersonajesPage implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

}
