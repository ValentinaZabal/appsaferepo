import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-nosotras',
  templateUrl: './nosotras.page.html',
  styleUrls: ['./nosotras.page.scss'],
})
export class NosotrasPage implements OnInit {

  constructor(private menuCtrl: MenuController) { 

  }
  onClick()
  {
    this.menuCtrl.toggle();
  }

  ngOnInit() {
  }

}
