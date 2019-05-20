import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-book-tag',
  templateUrl: './book-tag.component.html',
  styleUrls: ['./book-tag.component.css']
})
export class BookTagComponent implements OnInit {
  author;
  title;
  price;
  dateadded:any;
  dateread:any;
  description;
  imageUrl;
  rate;
  example = of(null);

  isRead:boolean = false;
  // dateAdapter:AppDateAdapter = new AppDateAdapter();
  constructor(
    private firebaseService:FirebaseService,
    private router:Router) { 
      
      //here we ask to fill the books from firebase into the service books var
      
      this.firebaseService.getBooks2()
  }

  ngOnInit() {
}

  //action to the date top open decsription and rate feild
 // EndDateChange(datee){
    // this.example.pipe(mapTo('World!'), delay(5000));
// console.log("im in the date event" + e.  );
   // this.isRead = false;
   // if(datee.targetElement.id == "mat-input-4" ){
      // this.dateread = this.firebaseService.formatDate(e);
     // console.log("hey");
  //    this.dateread = datee.target.value;
    //  this.isRead = true;
  //}
  
 // this.dateadded = datee.target.value;

//  }

  submitAdd(){
    let book = {
      author: this.author,
      title: this.title,
      price: this.price,
      dateadded: this.dateadded,
      dateread: this.dateread,
      description: this.description,
      rate: this.rate,
      imageUrl: this.imageUrl
    }

    console.log("here we start submit addd");

    console.log('Book before added to data base - ',book);

    this.firebaseService.addBook(book);

  //  console.log( "the firebase after added " + this.firebaseService.allbooks);

    this.router.navigate(['books']);
  }
}
