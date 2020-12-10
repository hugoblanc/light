import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '../environments/environment.prod';
import { LightState } from './models';

@Injectable({
  providedIn: 'root'
})
export class LightService {

  private static LIGHT_URL = environment.url + 'lights';


  constructor(private readonly http: HttpClient) { }

  getState(): Observable<LightState> {
    return of({ isStarted: true });
    // return this.http.get<LightState>(LightService.LIGHT_URL);
  }


  setState(state: LightState): Observable<LightState> {
    let mode: any = state.isStarted ? 1 : 0;
    mode = mode.toString();
    const params = { mode };
    return this.http.post<LightState>(LightService.LIGHT_URL, null, { params });
  }


}
