import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    components: CustomComponent[] = [
        {
            icon: 'american-football',
            name: 'Action Sheet',
            redirectTo: '/action-sheet'
        },
        {
            icon: 'appstore',
            name: 'Alert',
            redirectTo: '/alert'
        },
        {
            icon: 'beaker',
            name: 'Avatar',
            redirectTo: '/avatar'
        },
        {
            icon: 'radio-button-on',
            name: 'Botones y router',
            redirectTo: '/buttons'
        },
        {
            icon: 'card',
            name: 'Cards',
            redirectTo: '/card'
        },
        {
            icon: 'checkmark-circle-outline',
            name: 'Checkbox',
            redirectTo: '/check'
        },
        {
            icon: 'calendar',
            name: 'Date Time',
            redirectTo: '/date-time'
        },
        {
            icon: 'car',
            name: 'Fabs',
            redirectTo: '/fab'
        },
        {
            icon: 'grid',
            name: 'Grid - Rows',
            redirectTo: '/grid'
        },
        {
            icon: 'infinite',
            name: 'Infinite Scroll',
            redirectTo: '/infinite-scroll'
        },
        {
            icon: 'hammer',
            name: 'Input Forms',
            redirectTo: '/input'
        },
        {
            icon: 'list',
            name: 'List - Sliding',
            redirectTo: '/list'
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}

interface CustomComponent {
    icon: string;
    name: string;
    redirectTo: string;
}
