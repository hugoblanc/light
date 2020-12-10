import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-button',
  templateUrl: './state-button.component.html',
  styleUrls: ['./state-button.component.scss']
})
export class StateButtonComponent implements OnInit {

  @Input() state: boolean;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
