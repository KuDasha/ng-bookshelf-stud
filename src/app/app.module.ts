import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';

import { BookTagComponent } from './book-tag/book-tag.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookComponent } from './book/book.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

//forms
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

//material
import { MatButtonModule, 
  MatCheckboxModule, 
  MatCardModule, 
  MatGridListModule, 
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatIconModule } from '@angular/material';


//routes 
 
import { Routes, RouterModule } from '@angular/router';
import { EditBookComponent } from './edit-book/edit-book.component';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';

//service
import { FirebaseService } from '../app/services/firebase.service';
import { BookSearchComponent } from './book-search/book-search.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './providers/auth.service';
import { UserService } from './providers/user.service';




const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'book-list', component: BookListComponent },
  { path:'book/:id', component: BookComponent },
  { path:'book-tag', component: BookTagComponent },
  { path:'edit-book/:id', component: EditBookComponent },
  { path:'delete-book/:id', component: DeleteBookComponent },
  { path:'book-search', component: BookSearchComponent},
  { path:'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [GuardService]
  }


]

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HomeComponent,
    BookTagComponent,
    DeleteBookComponent,
    FooterComponent,
    NavbarComponent,
    BookComponent,
    EditBookComponent,
    BookSearchComponent,
    LoginComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatCardModule, 
    MatGridListModule, 
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase, 'student-book-app'),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [FirebaseService, AuthService, UserService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
