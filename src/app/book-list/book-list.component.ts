import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  allBooks: any; 
  allBooks2: any; 

  constructor(private firebaseServise: FirebaseService ) { 

  }
  
  ngOnInit() {
    this.firebaseServise.getBooks().subscribe(books => {
      this.allBooks = books;
    })

    this.firebaseServise.getBooks2().valueChanges().subscribe(books => {
      this.allBooks2 = books;
  });
  }
}
