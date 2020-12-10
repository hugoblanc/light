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

  constructor(private readonly lightService: LightService) { }

  ngOnInit(): void {
    this.lightState$ = this.lightService.getState();
  }


  toggleState(oldState: LightState): void {
    const newStart = { ...oldState };
    newStart.isStarted = !newStart.isStarted;
    this.lightState$ = this.lightService.setState(newStart);
  }

  updateState(newState: MatSliderChange): void {
    console.log(newState.value);

  }

}
