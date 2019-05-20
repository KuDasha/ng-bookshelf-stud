import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Router } from "@angular/router";




@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id: any;
  title;
  author;
  rate;
  description;
  imageUrl;
  dateadded:any;
  dateread:any;

  
  
  constructor( private firebaseService: FirebaseService, 
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
  this.id = this.activatedRoute.snapshot.params['id'];
//console.log("show me:"+ this.id);
  this.firebaseService.getBookDetails(this.id).valueChanges().subscribe(book => {
    console.log(book);
    this.title = book.title;
    this.author = book.author;
    this.rate = book.rate;
    this.description = book.description;
    this.imageUrl = book.imageUrl;
    this.dateadded = book.dateadded;
    this.dateread = book.dateread;

   // console.log(book.title);
  });

   
  }

}
