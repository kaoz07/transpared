import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utzac',
  templateUrl: './utzac.page.html',
  styleUrls: ['./utzac.page.scss'],
})
export class UtzacPage implements OnInit {

  cards = [
    { title: 'Sueldos', content: 'Contenido de la tarjeta 1', icon: 'ellipse' },
    { title: 'Prestaciones', content: 'Contenido de la tarjeta 2', icon: 'ellipse' },
    { title: 'Presupuesto Total', content: 'Contenido de la tarjeta 3', icon: 'ellipse' },
  ];  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPage(title: string) {
    console.log(title)
    switch(title) {
      case 'Sueldos':
        this.router.navigate(['sueldos']);
        break;
      case 'Prestaciones':
        this.router.navigate(['prestaciones']);
        break;
      case 'Presupuesto Total':
        this.router.navigate(['presupuesto']);
        break;
      default:
        break;
    }
  }

}
