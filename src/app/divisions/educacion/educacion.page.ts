import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.page.html',
  styleUrls: ['./educacion.page.scss'],
})
export class EducacionPage implements OnInit {

  cards = [
    { title: 'Secretaría de Educación Pública', content: 'Contenido de la tarjeta 1', icon: 'ellipse' },
    { title: 'Nivel Básico', content: 'Contenido de la tarjeta 2', icon: 'ellipse' },
    { title: 'Nivel Medio Superior', content: 'Contenido de la tarjeta 3', icon: 'ellipse' },
    { title: 'Nivel Superior', content: 'Contenido de la tarjeta 4', icon: 'ellipse' },
    { title: 'Educación Para Adultos', content: 'Contenido de la tarjeta 5', icon: 'ellipse' },
    { title: 'Educación Especial', content: 'Contenido de la tarjeta 6', icon: 'ellipse' },
    { title: 'Educación Inicial', content: 'Contenido de la tarjeta 7', icon: 'ellipse' },
    { title: 'Educación Indígena', content: 'Contenido de la tarjeta 8', icon: 'ellipse' },
    { title: 'Educación Artística y Cultural', content: 'Contenido de la tarjeta 9', icon: 'ellipse' },
    { title: 'Educación a Distancia y en Línea', content: 'Contenido de la tarjeta 10', icon: 'ellipse' }
  ];  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPage(title: string) {
    console.log(title)
    switch(title) {
      case 'Nivel Superior':
        this.router.navigate(['superior']);
        break;
      default:
        break;
    }
  }

}
