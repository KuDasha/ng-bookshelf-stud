import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";
import { Observable } from "rxjs";
//import {map} from 'rxjs/operators';
import 'core-js/es7/reflect';
import {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';

import { BehaviorSubject } from "rxjs";
// import "rxjs/add/operator/switchMap";
// import "rxjs/add/observable/zip";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  books: Observable<any[]>;
  favoriteBooks: Observable<any>;
  unreadBooks: Observable<any>;
  bookDetails: AngularFireObject<any>;
  allbooks: AngularFireList<any[]>;
  filteredBook: Observable<any[]>;
  // favoriteBooks2: Observable<any>;
  // topRatedBooks: any;

  constructor(private db: AngularFireDatabase) {}

  //   getBooks(){
  //     this.books = this.db.list('/books') as AngularFireList<any[]>;
  //     return this.books;
  //  }

  getBooks2() {
    this.allbooks = this.db.list('/books') as AngularFireList<any[]>;
    console.log("at call getbooks2() " + this.allbooks);
    return this.allbooks;
  }

  getBooks() {
    this.books = this.db.list('/books').snapshotChanges().pipe(map(books => {
      return books.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return {key, data};           
    });
  }));
    return this.books;
  }

  

  getFavoriteBooks() {
    this.favoriteBooks = this.db.list('/books').snapshotChanges().pipe(map(books => {
      return books.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return {key, data};           
    });
  }));
    return this.favoriteBooks;
  }
  // getFavoriteBooks2() {
  //   this.favoriteBooks2 = this.db.list('/books').snapshotChanges().pipe(map(books => {
  //     const topRatedBooks = books.filter(item => item.rate > 4);
  //     return this.topRatedBooks;
  //   }))
  //   return this.favoriteBooks2;
  // }

  getUnreadBooks() {
    this.unreadBooks = this.db.list('/books').snapshotChanges().pipe(map(books => {
      return books.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return {key, data};           
    });
  }));
    return this.unreadBooks;
  }

  getBookDetails(id){
    this.bookDetails = this.db.object('/books/'+id) as AngularFireObject<any>;
    console.log(this.bookDetails);
    return this.bookDetails;     
  }
  addBook(bookDetails){
    var filteredBook = JSON.parse(JSON.stringify(bookDetails)); //removes the undefined fields
    console.log('Filtered Book - ',filteredBook);
    return this.allbooks.push(filteredBook);
  }

  updateBook(id, bookDetails){
    var filteredBook = JSON.parse(JSON.stringify(bookDetails)); //removes the undefined fields
     this.allbooks.update(id,filteredBook);
  }
  deleteBook(id){
    this.allbooks.remove(id);
 }

  



//  getBookSearch(start: BehaviorSubject<string>): Observable<any[]> {
//   return start.pipe(
//     switchMap(startText => {
//       const endText = startText + "\uf8ff";
//       return this.db
//         .list('/books', ref =>
//           ref
//             .orderByChild('title')
//             .limitToFirst(1)
//             .startAt(startText)
//             .endAt(endText)
//         )
//         .snapshotChanges()
//         .pipe(
//           debounceTime(200),
//           distinctUntilChanged(),
//           map(changes => {
//             return changes.map(c => {
//               return { key: c.payload.key, ...c.payload.val() };
//           });
//       }));
//     }));
//   }


}
