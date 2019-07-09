import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

    birthDate: Date = new Date();
    customPickerOptions;
    customDate;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
        buttons: [{
            text: 'Save',
            handler: (event) => {
                console.log('Clicked Save!');
                console.log(event);
            }
        }, {
            text: 'Log',
            handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
            return false;
            }
        }]
    }
  }

  changeDate(event) {
      console.log('ionChange', event);
      console.log('Date', event.detail.value);
  }
}
