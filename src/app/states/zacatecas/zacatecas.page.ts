import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zacatecas',
  templateUrl: './zacatecas.page.html',
  styleUrls: ['./zacatecas.page.scss'],
})
export class ZacatecasPage implements OnInit {

  cards = [
    { title: 'Educación', content: 'Contenido de la tarjeta 1', icon: "ellipse" },
    { title: 'Salud', content: 'Contenido de la tarjeta 2', icon: "ellipse" },
    { title: 'Seguridad y Justicia', content: 'Contenido de la tarjeta 3', icon: "ellipse" },
    { title: 'Desarrollo Social', content: 'Contenido de la tarjeta 4', icon: "ellipse" },
    { title: 'Infraestructura y Transporte', content: 'Contenido de la tarjeta 5', icon: "ellipse" },
    { title: 'Economía y Finanzas', content: 'Contenido de la tarjeta 6', icon: "ellipse" },
    { title: 'Medio Ambiente y Recursos Naturales', content: 'Contenido de la tarjeta 7', icon: "ellipse" },
    { title: 'Relaciones Exteriores', content: 'Contenido de la tarjeta 8', icon: "ellipse" },
    { title: 'Cultura y Deporte', content: 'Contenido de la tarjeta 9', icon: "ellipse" },
    { title: 'Defensa y Seguridad Nacional', content: 'Contenido de la tarjeta 10', icon: "ellipse" },
    { title: 'Agricultura y Desarrollo Rural', content: 'Contenido de la tarjeta 11', icon: "ellipse" },
    { title: 'Energía', content: 'Contenido de la tarjeta 12', icon: "ellipse" },
  ];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  navigateToPage(title: string) {
    console.log(title)
    switch(title) {
      case 'Educación':
        this.router.navigate(['educacion']);
        break;
      default:
        break;
    }
  }

}
