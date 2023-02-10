import { Component, OnInit } from '@angular/core';
import { article } from '../core/model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  titre:string ="Les articles du jour";
  listeArticle!:article[];
  constructor() { }

  ngOnInit(): void {
    this.listeArticle=[
      {titre:'Le championnat du monde', contenu:'Le champion du monde de cette ',auteur:'Med Taher',date:'12/12/2005', categorie: 'Sport'}, 
      {titre:'Les nouveaux parents',contenu:'Les nouveaux parents.',auteur:'Ahmed Said',date:'11/11/2018', categorie:'Education'},
      {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi ...',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'}
    ]
  }

}
