import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TopicContainerComponent } from './topic-container/topic-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'topics',
    component: TopicContainerComponent,
  },
  {
    path: 'my-courses',
    component: MyCoursesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-courses/:courseId',
    component: CourseDetailComponent,
  },
  {
    path: 'questions',
    component: InterviewQuestionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
