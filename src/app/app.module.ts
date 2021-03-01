import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { AppMaterialModule } from './app-material.module';
import { TopicComponent } from './topic/topic.component';
import { TopicDialogComponent } from './topic-dialog/topic-dialog.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { TopicContainerComponent } from './topic-container/topic-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    TopicComponent,
    TopicDialogComponent,
    SigninComponent,
    SignupComponent,
    NotFoundComponent,
    CoursesComponent,
    InterviewQuestionsComponent,
    CourseDetailComponent,
    HomeComponent,
    MyCoursesComponent,
    TopicContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
