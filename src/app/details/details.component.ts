import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/model/product';
import { ProductComponent } from '../product/product.component';
import { ServicesprodService } from '../services/servicesprod.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!:number;
  listproduit!:Product[];
  constructor(private activatedroute:ActivatedRoute,private ps:ServicesprodService) {  
    this.id=this.activatedroute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.listproduit=this.ps.listproduct;
  }
}
