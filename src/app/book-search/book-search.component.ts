import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  books : Observable<any[]>; 
  startAt: BehaviorSubject<string | null> = new BehaviorSubject('');
  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.books = this.firebaseService.getBookSearch(this.startAt);
    }
  
    search(searchText) {
      this.startAt.next(searchText);
    }

//   search($event) {
//     let q = $event.target.value
//     this.startAt.next(q)
//     this.endAt.next(q+"\uf8ff")
// }
 
// } 
  }