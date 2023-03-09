import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor(private _http:HttpClient) { }
 getProducts(){
  return this._http.get<Product[]>("http://localhos:3000/products");
 }
 postProducts(prod:Product){
  return this._http.post<Product[]>("http://localhos:3000/products",prod);
 }
 updateProducts(id:number,prod:Product){
  return this._http.put<Product>("http://localhos:3000/products"+'/'+id,prod);
 }
 deleteProducts(id:number){
  return this._http.delete("http://localhos:3000/products/"+id);
 }

}
