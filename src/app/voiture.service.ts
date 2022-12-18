import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Voiture } from './model/Voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  readonly API_URL = "http://localhost:8000/api/voitures";

  constructor(private httpClient: HttpClient){ }

  saveVoiture(voiture: Voiture) : void{
    const body = {
      "libelle": voiture.libelle,
      "description": voiture.description,
      "couleur" : "red",
      "prix": voiture.prix,
      "image": voiture.image
    }

    const options = {
      headers: new HttpHeaders({"Content-Type": 'application/json', "Accept": "application/json"}),
    };

   if(voiture.id > 0) {
      this.httpClient.put<Voiture>(this.API_URL + '/' + voiture.id, body, options).subscribe();
      console.log("modifié");
   }else {
        this.httpClient.post<Voiture>(this.API_URL, body).subscribe();
        console.log("crée");
    }
  }

  deleteVoiture(voiture: Voiture) : void{
    this.httpClient.delete<Voiture>(this.API_URL + '/' + voiture.id).subscribe();
    console.log("supprimé service");
  }

  getVoitureById(id: string) : Voiture{
    const options = {
      headers: new HttpHeaders({"Content-Type": 'application/json', "Accept": "application/json"}),
    };
    let num = +id;
    let car: Voiture = new Voiture(0, '', '', '', 0, '', '');
    try {
      this.httpClient.get<Voiture>(this.API_URL + '/' + num, options).subscribe((voiture: Voiture) => {
        car.id = voiture.id;
        car.categorie = voiture.categorie;
        car.couleur = voiture.couleur;
        car.description = voiture.description;
        car.libelle = voiture.libelle;
        car.prix = voiture.prix;
        car.image = voiture.image;
      }, error => {
        console.log("error")
      });
      return car;
    } catch (error) {
      console.error(error)
      return new Voiture(0, '', '', '', 0, '', '');
    } 
  }
  
  getVoitures() : Voiture[]{
    const options = {
      headers: new HttpHeaders({"Content-Type": 'application/json', "Accept": "application/json"}),
    };
    let voitures: Voiture[] = [];
    try {
      this.httpClient.get<Voiture[]>(this.API_URL, options).subscribe((data: Voiture[]) => {
        data.forEach((voiture, key) => {
          let car: Voiture = new Voiture(0, '', '', '', 0, '', '');
          car.id = voiture.id;
          car.categorie = voiture.categorie;
          car.couleur = voiture.couleur;
          car.description = voiture.description;
          car.libelle = voiture.libelle;
          car.prix = voiture.prix;
          car.image = voiture.image;
          voitures.push(car);
        });
      }, error => {
        console.log("error")
      });
      return voitures;
    } catch (error) {
      console.error(error)
      return [];
    } 
  } 
}
