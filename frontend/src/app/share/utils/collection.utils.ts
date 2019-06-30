import {isEmpty} from 'lodash';

export class CollectionUtils {

  static getFirstItem<T>(arr: T[]): T | null {
    return arr && arr.length ? arr[0] : null;
  }

  static isEmpty<T>(arr: any): boolean {
    return isEmpty(arr);
  }

  static isNotEmpty<T>(arr: any): boolean {
    return !isEmpty(arr);
  }
}
