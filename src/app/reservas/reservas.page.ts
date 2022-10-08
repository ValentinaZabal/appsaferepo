import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  constructor(private menuCtrl: MenuController) { 

  }
  onClick()
  {
    this.menuCtrl.toggle();
  }

  ngOnInit() {
  }

}
