export interface ILightState{
  range: number;
}

export interface IEditLightState{
  range?: number;
  mode?: number;
}

export class LightState {
  range: number;
  mode: number;
  constructor(input: ILightState) {
    Object.assign(this, input);
  }

  get isStarted(): boolean {
    return this.range > 0;
  }
}
