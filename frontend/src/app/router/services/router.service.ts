import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

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
}
