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
import { InterviewQuestionsComponent } from './interview-questions/interview-questions.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { TopicContainerComponent } from './topic-container/topic-container.component';
import { CourseComponent } from './course/course.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './state/effects/products.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsReducer } from './state/reducers/products.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    TopicComponent,
    TopicDialogComponent,
    SigninComponent,
    SignupComponent,
    NotFoundComponent,
    InterviewQuestionsComponent,
    CourseDetailComponent,
    HomeComponent,
    MyCoursesComponent,
    TopicContainerComponent,
    CourseComponent,
    ProductComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    StoreModule.forRoot(
      {
        data: ProductsReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ProductsEffects]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
