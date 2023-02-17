import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';
import { ProductComponent } from '../product/product.component';
import { ServicesprodService } from '../services/servicesprod.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  p!:Product;
  constructor(private ps:ServicesprodService) { }

  ngOnInit(): void {
    this.p=new Product();
  }
  add(p:Product)
{
  console.log(p);
  this.ps.listproduct.push(p);
  console.log(this.ps.listproduct);
}
    
}
