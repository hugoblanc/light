import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Observable } from 'rxjs';

import { LightService } from './light.service';
import { LightState } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'light';

  lightState$: Observable<LightState>;

  constructor(private readonly lightService: LightService) {
  }

  ngOnInit(): void {
    this.lightState$ = this.lightService.getState();
  }


  toggleState(oldState: LightState): void {
    const newState = new LightState({range: oldState.isStarted ? 0 : 10});

    this.lightState$ = this.lightService.setState(newState);
  }

  updateState(newState: MatSliderChange): void {
    const range = newState.value;
    console.log(range);
    this.lightService.setState(new LightState({ range })).subscribe();
  }

}
