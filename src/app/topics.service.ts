import { Injectable } from '@angular/core';
import { ITopic } from './models/interfaces';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  constructor(private firestore: AngularFirestore) {}

  create(payload: ITopic) {
    return this.firestore.collection('topics').add(payload);
  }

  read() {
    return this.firestore.collection('topics').snapshotChanges();
  }

  update(payload: ITopic) {
    return this.firestore.doc('topics/' + payload.id).update(payload);
  }

  delete(topicId: string) {
    return this.firestore.doc('topics/' + topicId).delete();
  }
}
