import { Component, OnInit } from '@angular/core';
import { LibrarydataService } from '../librarydata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  bookDetails: any
  bookName: String;
  author: String;
  language: String;
  copyRight: Number;
  edition: Number;
  categoryType: String;
  constructor(private libraryDataService: LibrarydataService, private router: Router) { }

  ngOnInit() {
  }

  addBook() {
    alert('Book Registered Successfully');
    this.bookDetails = { bookName: this.bookName, author: this.author, language: this.language, copyRight: this.copyRight, edition: this.edition, categoryType: this.categoryType }
    this.libraryDataService.addBooks(this.bookDetails)
    console.log('Book Info', this.bookDetails);
    this.router.navigate(['\home']);
  }

}
