import {createAction} from '@ngrx/store';

export enum CoreActionTypes {
  PAGE_DATA_FETCHED = '[Core actions] page data fetched',
}

export const CoreActions = {
  pageDataFetched: createAction(CoreActionTypes.PAGE_DATA_FETCHED)
};
