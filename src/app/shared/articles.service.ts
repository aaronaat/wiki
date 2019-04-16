import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private db: AngularFirestore) { }

  getArticles() { 
    return this.db.collection('pages').snapshotChanges();
  }
}
