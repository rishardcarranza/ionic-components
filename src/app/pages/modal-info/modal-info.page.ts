import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

    @Input() nombre;
    @Input() pais;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
        nombre: 'Cesar',
        pais: 'EE UU'
    });

  }
}
