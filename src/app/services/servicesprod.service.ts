import { Injectable } from '@angular/core';
import { Emploi } from '../core/model/Emploi';
import { Product } from '../core/model/product';
import { ProductComponent } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ServicesprodService {

listproduct!:Product[]
listeEmploi!:Emploi[]
  constructor() {
    this.listproduct=[
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0},
    ]
    this.listeEmploi=[
      {refrence:"1234",titre:"SRN",entreprise:"Nimo",etat:true},
      {refrence:"2",titre:"Amogos",entreprise:"Discord",etat:false},
    ]
   }

  ngOnInt():void{
    
  }
  searchforproduct(liste:any[],chriteria:string,val:any) :number
{
  let n=0
  for (var i in liste){
    if(liste[i][chriteria]==val)
    n++;
  }
  return n;
  
}
}
