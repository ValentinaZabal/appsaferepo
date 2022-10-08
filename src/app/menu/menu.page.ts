import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menuCtrl: MenuController, 
    public alertController: AlertController,
    public navCtrl: NavController) { 

  }
  onClick()
  {
    this.menuCtrl.toggle();
  }

  ngOnInit() {
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Estas seguros de que quieres salir?',
      buttons: [
        {
          text: 'No ',
          handler: () => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

  }
}