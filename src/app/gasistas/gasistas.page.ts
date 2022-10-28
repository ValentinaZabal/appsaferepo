import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gasistas',
  templateUrl: './gasistas.page.html',
  styleUrls: ['./gasistas.page.scss'],
})
export class GasistasPage implements OnInit {

  constructor(private menuCtrl: MenuController) { 

  }
  onClick()
  {
    this.menuCtrl.toggle();
  }

  ngOnInit() {
  }

  gasistas = [
    {
    edad: 18,
    nombre: "Jose Perez",
    rubro:'gasista',
    logo: "./assets/img/persona1.jpg"
  },
  {
    edad: 18,
    nombre: 'Jose Perez',
    rubro:'gasista',
    logo: "./assets/img/persona2.jpg"
  },
  {
    edad: 18,
    nombre: 'Jose Perez',
    rubro:'gasista',
    logo: "./assets/img/persona3.jpg"
  },
  {
    edad: 18,
    nombre: "Jose Perez",
    rubro:'gasista',
    logo: "./assets/img/persona1.jpg"
  },
  {
    edad: 18,
    nombre: 'Jose Perez',
    rubro:'gasista',
    logo: "./assets/img/persona2.jpg"
  },
  {
    edad: 18,
    nombre: 'Jose Perez',
    rubro:'gasista',
    logo: "./assets/img/persona3.jpg"
  },
]

}
