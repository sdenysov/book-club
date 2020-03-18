import {RootStoreConfig} from '@ngrx/store/src/store_module';

export class StoreTestUtils {

  static DEFAULT_ROOT_STORE_CONFIG: RootStoreConfig<any> = {
    runtimeChecks: {
      strictStateImmutability: false,
      strictStateSerializability: false
    }
  };
}
