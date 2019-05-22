import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  id;
  bookTitle;
  bookDescription;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute){ }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).valueChanges().subscribe(book => {
      this.bookTitle = book.title;
      this.bookDescription = book.description;
    });
  }
removeBook() {
  this.firebaseService.deleteBook(this.id);
  this.router.navigate([''])
}
}
