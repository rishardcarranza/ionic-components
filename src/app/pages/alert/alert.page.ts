import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

    title: string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

    async presentAlert() {
        const alert = await this.alertCtrl.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                },
                {
                    text: 'OK',
                    handler: (blah) => {
                        console.log('Ok button');
                    }
                }
            ]
        });
  
      await alert.present();
    }

    async presentAlertPrompt() {
        const alert = await this.alertCtrl.create({
          header: 'Prompt to input data!',
          inputs: [
            {
              name: 'txtTitle',
              type: 'text',
              placeholder: 'Write the Title'
            }
          ],
          buttons: [
            {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    console.log('Confirm Cancel');
                }
            }, {
                text: 'Ok',
                handler: (data) => {
                    this.title = data.txtTitle;
                    console.log(this.title);
                }
            }
          ]
        });
    
        await alert.present();
    }

}
