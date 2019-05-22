import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router,ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms"


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id:any;
  book:any;
  author;
  title;
  description;
  imageUrl;
  price;
  rate;
  isRead ;
  genre;
  
  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute){ }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).valueChanges().subscribe (book => {
      this.author = book.author;
      this.title = book.title;
      this.description = book.description;
      this.imageUrl = book.imageUrl;
      this.price = book.price;
      this.rate = book.rate;
      this.genre = book.genre;
    });
  }
  
  // updateDateAdded(date){
  //   this.dateadded = this.dateAdapter.format(date,"input");
  // }

  // updateDateRead(date){
  //   this.dateread =this.dateAdapter.format(date,"input");
  // }

  //EndDateChange(datee){
    // this.example.pipe(mapTo('World!'), delay(5000));
// console.log("im in the date event" + e.  );
  //  this.isRead = false;
    //if(datee.targetElement.id == "mat-input-4" ){
      // this.dateread = this.firebaseService.formatDate(e);
     // console.log("hey");
     // this.dateread = datee.target.value;
    //  this.isRead = true;
  //}
  
 // this.dateadded = datee.target.value;
//}

  submitEdit() {
    let book = {
      author: this.author,
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl,
      price: this.price,
      rate: this.rate
    }

    this.firebaseService.updateBook(this.id, book);
    this.router.navigate(['/books'])
  }

}
