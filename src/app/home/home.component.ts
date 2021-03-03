import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  coursesList: any;
  constructor(private _coursesService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this._coursesService.getCourses().subscribe((res) => {
      this.coursesList = res.map((course) => {
        return {
          ...(course.payload.doc.data() as {}),
          id: course.payload.doc.id,
        };
      });
    });
  }

  onSubscribeNewCourse(course: any): void {
    this._coursesService.subscribeNewCourse(course).then();
  }
}
