import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  coursesList: any;
  productsList: any;

  constructor(
    private _coursesService: CourseService,
    private _productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getCourses();
    this.getProducts();
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

  getProducts(): void {
    this._productService.getProducts().subscribe((res) => {
      this.productsList = res.map((product) => {
        return {
          ...(product.payload.doc.data() as {}),
          id: product.payload.doc.id,
        };
      });
    });
  }

  onSubscribeNewCourse(course: any): void {
    this._coursesService.subscribeNewCourse(course).then();
  }
}
