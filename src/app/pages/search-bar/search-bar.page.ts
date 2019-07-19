import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

    albumes:any[] = [];
    textoBuscar:string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService.getAlbumes()
        .subscribe(albumes => {
            console.log(albumes);
            this.albumes = albumes;
        });
  }

  buscar(event) {
    //   console.log(event);
    this.textoBuscar = event.detail.value;
  }
}
