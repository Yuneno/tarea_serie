import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: '/home', icon: 'book' },
    { title: 'Personajes', url: '/personajes', icon: 'body' },
    { title: 'Momentos', url: '/momentos', icon: 'heart' },
    { title: 'Acerca de TT', url: '/about-me', icon: 'me' },
    { title: 'En Mi Vida', url: '/mai-laif', icon: 'trash' },
    { title: 'Me contratas :3', url: '/me-contratas', icon: 'warning' },
  ];

  constructor() {}
}
