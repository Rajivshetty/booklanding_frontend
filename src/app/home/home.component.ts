import { Component, OnInit } from '@angular/core';
import { LibrarydataService } from '../librarydata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: any = [];

  constructor(private libraryDataService: LibrarydataService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.libraryDataService.getBookDetails()
      .subscribe(data => {
        debugger;
        this.books = data.bookDto;
      }, error => {
      });
  }

}
