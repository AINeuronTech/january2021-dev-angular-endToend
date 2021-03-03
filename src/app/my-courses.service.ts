import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class MyCoursesService {
  constructor(private firestore: AngularFirestore) {}

  getCourses() {
    return this.firestore.collection('myCourses').snapshotChanges();
  }

  deleteCourse(courseId: string) {
    return this.firestore.doc('myCourses/' + courseId).delete();
  }
}
