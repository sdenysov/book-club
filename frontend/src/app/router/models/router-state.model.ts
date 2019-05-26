import {Data, Params} from '@angular/router';

export interface RouterStateModel {
  url: string;
  queryParams: Params;
  params: Params;
  data: Data;
}
