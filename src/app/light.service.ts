import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment.prod';
import { LightState } from './models';

@Injectable({
  providedIn: 'root'
})
export class LightService {

  private static LIGHT_URL = environment.url + 'lights';


  constructor(private readonly http: HttpClient) { }

  getState(): Observable<LightState> {
    // return of({isStarted: true});
    return this.http.get<LightState>(LightService.LIGHT_URL)
      .pipe(map(state => new LightState(state)));
  }


  setState(state: LightState): Observable<LightState> {
    const mode = state.range.toString();
    const params = { mode };
    return this.http.post<LightState>(LightService.LIGHT_URL, null, { params })
      .pipe(map(state => new LightState(state)));
  }


}
