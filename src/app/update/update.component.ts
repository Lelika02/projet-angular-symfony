import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from '../model/Voiture';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  voiture!: Voiture;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private voitureService: VoitureService) { }

  ngOnInit(): void {
    const id: string|null = this.route.snapshot.paramMap.get('id');
    if(id){
      this.voiture = this.voitureService.getVoitureById(id);
    }
  }

  onSubmit(): void {
    this.voitureService.saveVoiture(this.voiture);
    console.log("update");
    this.router.navigate(['voitures']);
  }
}
