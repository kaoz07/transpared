import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestaciones',
  templateUrl: './prestaciones.page.html',
  styleUrls: ['./prestaciones.page.scss'],
})
export class PrestacionesPage implements OnInit {

  cards = [
    { title: 'Prestaciones Ligadas al Salario', content: 'Contenido de la tarjeta 1', icon: 'ellipse' },
    { title: 'Prestaciones no Ligadas al Salario', content: 'Contenido de la tarjeta 2', icon: 'ellipse' },
    { title: 'Prestaciones Socioeconómicas', content: 'Contenido de la tarjeta 3', icon: 'ellipse' },
  ];  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPage(title: string) {
    console.log(title)
    switch(title) {
      case 'Prestaciones Ligadas al Salario':
        this.router.navigate(['salario']);
        break;
      case 'Prestaciones no Ligadas al Salario':
        this.router.navigate(['no-salario']);
        break;
      case 'Prestaciones Socioeconómicas':
        this.router.navigate(['socio']);
        break;
      default:
        break;
    }
  }

}
