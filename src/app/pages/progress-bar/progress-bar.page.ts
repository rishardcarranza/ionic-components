import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

    porcentaje:number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  cambioValor(event) {
        let value:number = event.detail.value;
        this.porcentaje = (value / 100);

      console.log(this.porcentaje);
  }
}
