import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { Product } from '../core/model/product';
import { ProductComponent } from '../product/product.component';
import { ConsumeService } from '../services/consume.service';
import { ServicesprodService } from '../services/servicesprod.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  p!:Product;
  imgFile!: string;
  constructor(private ps:ServicesprodService,private consume:ConsumeService,private roue:Router) { }

  ngOnInit(): void {
    this.p=new Product();
    this.p.like=0;
  }
  add(p:Product)
{
  this.consume.postProducts(p);
}
    
}
