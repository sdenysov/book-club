import {Data, Params} from '@angular/router';

export interface IRouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
  data: Data;
}
