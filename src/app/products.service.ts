import { Injectable } from '@angular/core';
import { IProduct } from './models/interfaces';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private firestore: AngularFirestore) {}

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  update(payload: IProduct) {
    return this.firestore.doc('products/' + payload.id).update(payload);
  }

  delete(productId: string) {
    return this.firestore.doc('products/' + productId).delete();
  }
}
