import { Component, OnInit } from '@angular/core';
import { exit } from 'process';
import { Product } from '../core/model/product';
import { ServicesprodService } from '../services/servicesprod.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title : string ="zdahmed"
  listProduct!: Product[];
  filter!: number;
  quant!:number;
  crit!:string;
  result!:number;
  constructor(public ps:ServicesprodService) { 
    this.listProduct=this.ps.listproduct;
    }

  ngOnInit(): void {
  }
  buy(i:number){
    if (this.listProduct[i].quantity==0)
    {
      alert("T shirt is no longer in stock")
    }
    this.listProduct[i].quantity--;
  }
  like(i:number){
    this.listProduct[i].like++;
  }
  onnumber(){
    this.result=this.ps.searchforproduct(this.listProduct,this.crit,this.quant);
  }


}
