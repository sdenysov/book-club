import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {IUrlState} from '@@navigation/models/url-state';

@Injectable({providedIn: 'root'})
export class RouterService {

  constructor(private router: Router) {}

  goTo(url: string) {
    this.router.navigate([url]);
  }

  goToMainPage() {
    this.router.navigate(['/']);
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  goTo404Page() {
    this.router.navigate(['/404']);
  }

  goToProfile(userName) {
    this.router.navigate([`/${userName}`]);
  }

  goToUserBooks(userName) {
    this.router.navigate([`/${userName}/books`]);
  }

  goToUserNewBook(userName) {
    this.router.navigate([`/${userName}/new-book`]);
  }

  goToBookDetailPage(id) {
    this.router.navigate([`/books/${id}`]);
  }

  goToFindBooksPage(state: Partial<IUrlState>) {
    this.router.navigate(['/find-books'], {state: {data: state}});
  }

}
