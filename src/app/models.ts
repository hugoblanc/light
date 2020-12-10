export interface ILightState{
  range: number;
}

export class LightState {
  range: number;
  constructor(input: ILightState) {
    Object.assign(this, input);
  }

  get isStarted(): boolean {
    return this.range > 0;
  }
}
