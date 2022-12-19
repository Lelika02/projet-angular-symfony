import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'ACCUEIL',
        routerLink: '/',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'GAMMES VOITURES',
        routerLink: 'voitures',
        icon: 'pi pi-fw pi-list'
      },
      {
        label: 'SE CONNECTER',
        routerLink: 'login',
        icon: 'pi pi-fw pi-sign-in'
      },
      {
        label: 'SE DECONNECTER',
        icon: 'pi pi-fw pi-sign-out'
      }
    ]
  }

}
