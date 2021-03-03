import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input() course: any;
  @Output() subscribeNewCourse = new EventEmitter();
  @Output() unSubscribeCourse = new EventEmitter();
  @Input() displayUnsubscribe: any;

  constructor() {}

  ngOnInit(): void {}
}
