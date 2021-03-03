import { Component, OnInit } from '@angular/core';
import { MyCoursesService } from '../my-courses.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss'],
})
export class MyCoursesComponent implements OnInit {
  coursesList: any;
  constructor(private _myCoursesService: MyCoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this._myCoursesService.getCourses().subscribe((res) => {
      this.coursesList = res.map((course) => {
        return {
          ...(course.payload.doc.data() as {}),
          id: course.payload.doc.id,
        };
      });
    });
  }

  onUnSubscribeCourse(course: any): void {
    this._myCoursesService.deleteCourse(course.id).then();
  }
}
