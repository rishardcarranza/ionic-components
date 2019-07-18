import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPopover(event) {
      const popover = await this.popoverCtrl.create({
          component: PopinfoComponent,
          event: event,
          mode: 'ios',
          backdropDismiss: false
      });

      await popover.present();

    //   const {data} = await popover.onDidDismiss(); // When the popover has been closed
      const {data} = await popover.onWillDismiss(); // When the popover is open yet, but the action to close has been fired

      console.log('Parent: ', data);
  }
}
