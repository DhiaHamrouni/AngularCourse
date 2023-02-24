import { Component, OnInit } from '@angular/core';
import { Formulaire } from '../core/model/Formulaire';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {
  form!:Formulaire
  constructor() { 
    this.form=new Formulaire();
  }
    
  ngOnInit(): void {
  }

}
