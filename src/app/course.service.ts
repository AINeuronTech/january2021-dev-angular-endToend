import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private firestore: AngularFirestore) {}

  subscribeNewCourse(payload: any) {
    return this.firestore.collection('myCourses').add(payload);
  }

  getCourses() {
    return this.firestore.collection('courses').snapshotChanges();
  }
}
