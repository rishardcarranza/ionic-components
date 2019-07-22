import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    @ViewChild('lista') lista: IonList;

    usuarios: Observable<any>;

  constructor(private dataService: DataService, private toastCtrl:ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

    favorite(user) {
        // console.log('user', user);
        this.presentToast('Guardo en favoritos');
        this.lista.closeSlidingItems();
    }
    
    share(user) {
        // console.log('user', user);
        this.presentToast('Se compartio en favoritos');
        this.lista.closeSlidingItems();
    }

    borrar(user) {
        // console.log('user', user);
        this.presentToast('Se ha eliminado el registro');
        this.lista.closeSlidingItems();
    }

    async presentToast(message) {
        const toast = await this.toastCtrl.create({
            message,
            duration: 2000
        });
        toast.present();
    }
}
