import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sueldos',
  templateUrl: './sueldos.page.html',
  styleUrls: ['./sueldos.page.scss'],
})
export class SueldosPage implements OnInit {

  cards = [
    { title: 'Personal de Mandos Superiores y Medios', content: 'Contenido de la tarjeta 1', icon: 'ellipse' },
    { title: 'Personal Académico', content: 'Contenido de la tarjeta 2', icon: 'ellipse' },
    { title: 'Personal Administrativo y Secretarial', content: 'Contenido de la tarjeta 3', icon: 'ellipse' },
  ];  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPage(title: string) {
    console.log(title)
    switch(title) {
      case 'Personal de Mandos Superiores y Medios':
        this.router.navigate(['mandos']);
        break;
      case 'Personal Académico':
        this.router.navigate(['academico']);
        break;
      case 'Personal Administrativo y Secretarial':
        this.router.navigate(['admin']);
        break;
      default:
        break;
    }
  }

}
