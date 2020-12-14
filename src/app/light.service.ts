import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment.prod';
import { IEditLightState, LightState } from './models';

@Injectable({
  providedIn: 'root'
})
export class LightService {

  private static LIGHT_URL = environment.url + 'lights';


  constructor(private readonly http: HttpClient) { }

  getState(): Observable<LightState> {
    return this.http.get<LightState>(LightService.LIGHT_URL)
      .pipe(map(state => new LightState(state)));
  }


  setState(state: IEditLightState): Observable<LightState> {
    const params: any = {};
    if (state.range) {
      params.range = state.range.toString();
    }

    if (state.mode) {
      params.mode = state.mode.toString();
    }

    return this.http.post<LightState>(LightService.LIGHT_URL, null, { params })
      .pipe(
        map((lightState: LightState) => new LightState(lightState))
      );
  }

}
