import {RouterReduxService} from '@@router/services/router-redux.service';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class RouterService {

  constructor(private router: Router,
              private routerReduxService: RouterReduxService) {
  }

  goToLoginPage() {
    // TODO Add login page url mapping
    this.router.navigate(['/login']);
  }

  goTo404Page() {
    // TODO Add 404 page url mapping
    this.router.navigate(['/404']);
  }
}
