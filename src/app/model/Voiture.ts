export class Voiture {

    constructor(public id: number,
        public libelle: string,
        public description: string,
        public couleur: string,
        public prix: number,
        public image: string,
        public categorie: string){}
}