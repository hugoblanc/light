import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Observable } from 'rxjs';

import { LightService } from './light.service';
import { IEditLightState, LightState } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'light';

  lightState$: Observable<LightState>;

  currentMode = 1;

  constructor(private readonly lightService: LightService) {
  }

  ngOnInit(): void {
    this.lightState$ = this.lightService.getState();
  }


  toggleState(oldState: LightState): void {
    const newState = new LightState({ range: oldState.isStarted ? 0 : 10 });

    this.lightState$ = this.lightService.setState(newState);
  }

  changeMode(mode: number): void {
    this.currentMode = mode;
    const editState: IEditLightState = { mode };
    this.lightService.setState(editState).subscribe();
  }

  updateState(newState: MatSliderChange): void {
    const range = newState.value;
    const editState: IEditLightState = { range };
    this.lightService.setState(editState).subscribe();
  }

}
