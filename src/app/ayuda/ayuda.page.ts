import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {

  constructor(private menuCtrl: MenuController) { 

  }
  onClick()
  {
    this.menuCtrl.toggle();
  }

  ngOnInit() {
  }

}
