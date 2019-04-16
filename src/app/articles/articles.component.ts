import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from "../shared/articles.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private articlesService:ArticlesService) { }

  ngOnInit() {this.getArticles();}

  articles;

  getArticles = () => this.articlesService.getArticles().subscribe(res => (this.articles = res));

}
