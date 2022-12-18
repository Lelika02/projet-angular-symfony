import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from '../model/Voiture';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.scss']
})
export class AddVoitureComponent implements OnInit {

  public form!: FormGroup;
  public voiture: Voiture = new Voiture(0, '', '', '', 0, '', '');

  constructor(private fb: FormBuilder,
              private route: Router,
              private voitureService: VoitureService) {
  }

  ngOnInit(): void {  
    this.form = this.fb.group({ //Crée une instance de FormGroup
      libelle : [null, Validators.required],
      description : [null, Validators.required],
      prix : [0, Validators.required],
      image : [null, Validators.required]
    }); 
  }

  onSubmit() {
    if(this.form.valid){
      if(this.form.dirty){
        this.voiture.libelle = this.form.get('libelle')?.value;
        this.voiture.description = this.form.get('description')?.value;
        this.voiture.prix = this.form.get('prix')?.value;
        this.voiture.image = this.form.get('image')?.value;

        this.voitureService.saveVoiture(this.voiture);
        this.route.navigate(['voitures']);
        console.log("enreg");
      }
    }
  }

}
