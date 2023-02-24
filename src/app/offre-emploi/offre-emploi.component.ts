import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/Emploi';
import { ServicesprodService } from '../services/servicesprod.service';

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.css']
})
export class OffreEmploiComponent implements OnInit {

  listeEmploi!:Emploi[];
  quant!:number;
  crit!:string;
  result!:number;
  constructor(private ps:ServicesprodService) {
    this.listeEmploi=this.ps.listeEmploi;
   }
  ngOnInit(): void {
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
  onnumber(){
    this.result=this.ps.searchforproduct(this.listeEmploi,this.crit,this.quant);
  }
}
