import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from '../model/Voiture';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private id!: string | null;
  public voiture!: Voiture;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != null){
      this.voiture = this.voitureService.getVoitureById(this.id);
    }
  }

  onCancel(): void{
    this.router.navigate(['voitures']);
  }



}
