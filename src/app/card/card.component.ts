import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Voiture } from '../model/Voiture';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() voiture!: Voiture;
  public franc : string = "cfp";

  constructor(private voitureService: VoitureService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
  }

  onSuppr(voiture: Voiture) : void {
    this.voitureService.deleteVoiture(voiture);
    this.router.navigate(['delete']);
    console.log("suppr");
    /*this.confirmationService.confirm({
        message: 'Voulez vous supprimer cet élément ?',
        header: 'Confirmation suppression',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmé', detail:'Elément supprimé'});
        },
        reject: (type: any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Rejeté', detail:'Vous avez refusé'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Annulé', detail:'Vous avez annulé'});
                break;
            }
        }
    });*/
}

  onEdit(id: number) : void {
    this.router.navigate(['modifier/' + id]);
  }

  onDetail(id: number) : void {
    this.router.navigate(['detail/' + id]);
  }

}
