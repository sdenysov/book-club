import {AppScreenLockModule} from '@@screen-lock/screen-lock.module';
import {ScreenLockReduxService} from '@@screen-lock/services/screen-lock-redux.service';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

export function ScreenLocking(): MethodDecorator {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalFunction = target[propertyKey];
    descriptor.value = function (...args) {
      const screenLockReduxService = AppScreenLockModule.injector.get(ScreenLockReduxService);
      screenLockReduxService.incrementPendingRequestsCounter();
      const result = originalFunction.apply(this, args);
      if (result instanceof Observable) {
        return result.pipe(finalize(() => {
          screenLockReduxService.decrementPendingRequestsCounter();
        }));
      } else if (result instanceof Promise) {
        const promiseResponseDecorator = response => {
          screenLockReduxService.decrementPendingRequestsCounter();
          return response;
        };
        return result
          .then(promiseResponseDecorator)
          .catch(promiseResponseDecorator);
      }
      screenLockReduxService.decrementPendingRequestsCounter();
      return result;
    };
    return descriptor;
  };
}
