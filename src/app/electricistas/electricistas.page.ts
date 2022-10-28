import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-electricistas',
  templateUrl: './electricistas.page.html',
  styleUrls: ['./electricistas.page.scss'],
})
export class ElectricistasPage implements OnInit {

  constructor(private menuCtrl: MenuController) { 

  }
  onClick()
  {
    this.menuCtrl.toggle();
  }

  ngOnInit() {
  }

  electricistas = [
    {
    edad: 18,
    nombre: "Jose Perez",
    rubro:'electricista',
    logo: "./assets/img/persona1.jpg"
  },
  {
    edad: 18,
    nombre: 'Jose Perez',
    rubro:'electricista',
    logo: "./assets/img/persona2.jpg"
  },
  {
    edad: 18,
    nombre: 'Jose Perez',
    rubro:'electricista',
    logo: "./assets/img/persona3.jpg"
  },
  {
    edad: 18,
    nombre: "Jose Perez",
    rubro:'electricista',
    logo: "./assets/img/persona1.jpg"
  },
  {
    edad: 18,
    nombre: 'Jose Perez',
    rubro:'electricista',
    logo: "./assets/img/persona2.jpg"
  },
  {
    edad: 18,
    nombre: 'Jose Perez',
    rubro:'electricista',
    logo: "./assets/img/persona3.jpg"
  },
]


}
