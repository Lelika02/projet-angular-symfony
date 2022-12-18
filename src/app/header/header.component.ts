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
        url: ' ',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'GAMMES VOITURES',
        url: 'voitures',
        icon: 'pi pi-fw pi-list'
      },
      {
        label: 'SE CONNECTER',
        url: 'login',
        icon: 'pi pi-fw pi-sign-in'
      },
      {
        label: 'SE DECONNECTER',
        icon: 'pi pi-fw pi-sign-out'
      }
    ]
  }

}
