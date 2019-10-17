import { Component, OnInit } from '@angular/core';
import { LibrarydataService } from '../librarydata.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: any = [];

  constructor(private libraryDataService: LibrarydataService, private userService: UserService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.libraryDataService.getBookDetails()
      .subscribe(data => {
        this.books = data.bookDto;
      }, error => {
      });
  }

  borrowBook(bookId) {
    let bookDetails = {
      userId: this.userService.currentUserInfo['userId'],
      bookId: bookId
    }
    this.libraryDataService.borrowBook(bookDetails)
      .subscribe(data => {
        console.log(data);
      }, error => {
      });
  }

}
