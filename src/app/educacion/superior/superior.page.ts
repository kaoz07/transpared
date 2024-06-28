import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superior',
  templateUrl: './superior.page.html',
  styleUrls: ['./superior.page.scss'],
})
export class SuperiorPage implements OnInit {

  cards = [
    { title: 'Universidad Tecnológica del Estado de Zacatecas', content: 'Contenido de la tarjeta 1', icon: 'ellipse' },
    { title: 'Universidad Autónoma del Estado de Zacatecas', content: 'Contenido de la tarjeta 2', icon: 'ellipse' },
  ];  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPage(title: string) {
    console.log(title)
    switch(title) {
      case 'Universidad Tecnológica del Estado de Zacatecas':
        this.router.navigate(['utzac']);
        break;
      default:
        break;
    }
  }

}
