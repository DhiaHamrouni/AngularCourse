import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/Emploi';

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.css']
})
export class OffreEmploiComponent implements OnInit {

  listeEmploi!:Emploi[];
  constructor() { }
  ngOnInit(): void {
    this.listeEmploi=[
      {refrence:"1234",titre:"SRN",entreprise:"Nimo",etat:true},
      {refrence:"2",titre:"Amogos",entreprise:"Discord",etat:false},
    ]
  }
  srn(){
    var i:number=0;
    var s:number=0;
    for(i;i<this.listeEmploi.length;i++){
        if (this.listeEmploi[i].etat==false){
            s++;
        }
    }
    alert(s);
  }

}
