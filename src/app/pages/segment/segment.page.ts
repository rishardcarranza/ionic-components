import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

    @ViewChild(IonSegment) segment: IonSegment;
    superHeroes: Observable<any>;
    textoBuscar:string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.segment.value = 'todos';
      this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {
      const valorSegmento = event.detail.value;
      this.textoBuscar = (valorSegmento === 'todos') ? '' : valorSegmento;
      
    console.log(valorSegmento)
  }
}
