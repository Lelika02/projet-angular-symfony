import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from '../model/Voiture';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
onAdd() {
throw new Error('Method not implemented.');
}

  voitures: Voiture[] = []; 

  constructor(private voitureService: VoitureService,
              private router: Router) { 
   
  }

  ngOnInit(): void {
    this.voitures = this.voitureService.getVoitures();
  }

  onAjouter() : void {
    this.router.navigate(['ajouter']);
  }

}
