import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  allbooks: any;
  searchText: string = "";
  

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firebaseService.getBooks2().valueChanges().subscribe(books =>{
      this.allbooks = books;
    //this.firebaseService.getBooks().subscribe(books => {
      //this.allbooks = books;
    })
  
  }

  filterCondition(books) {
    return books.title.toString().toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}