import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomComponent } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    getMenuOptions() {
        return this.http.get<CustomComponent[]>('/assets/data/menu.json')
    }
}