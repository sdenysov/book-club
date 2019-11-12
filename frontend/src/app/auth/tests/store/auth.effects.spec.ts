import {AuthEffects} from '@@auth/store/auth.effects';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Action} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {Observable} from 'rxjs';

describe('AuthEffectsSpec', () => {

  let actions$: Observable<Action>;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthEffects,
        provideMockStore({}),
        provideMockActions(() => actions$),
      ]
    });
    effects = TestBed.get(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('other tests', () => {
    // TODO other tests
  });
});
