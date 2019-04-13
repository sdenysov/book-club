import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksReduxService} from '@@books-page/services/books-redux.service';
import {BookModel} from '@@books-page/models/book.model';
import {Subscription} from 'rxjs/index';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-book-detail-component',
  templateUrl: './book-detail.component.html',
})

export class AppBookDetailComponent implements OnInit, OnDestroy {
  book: BookModel;
  subsription: Subscription;

  constructor(private booksReduxService: BooksReduxService,
              private route: ActivatedRoute,
              private location: Location) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subsription = this.booksReduxService.getBookById(id).subscribe(book => {
     this.book = book;
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.subsription.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
