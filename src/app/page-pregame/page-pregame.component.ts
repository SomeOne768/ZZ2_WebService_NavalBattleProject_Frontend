import { Component, OnInit } from '@angular/core';
import { ASSOCIATEDSHIPS, BODY, NAME } from '../mock-map';
import { CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-page-pregame',
  templateUrl: './page-pregame.component.html',
  styleUrls: ['./page-pregame.component.css']
})

export class PagePregameComponent implements OnInit {

  grid = BODY;

  name = NAME;

  associatedShips = ASSOCIATEDSHIPS;

  public dragging: boolean;

  constructor() {
    this.dragging = false;
  }

  ngOnInit(): void {}

  createRange(number: number){
    // return new Array(number);
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

  public handleDragStart(event: any): void {
    this.dragging = true;
  }

  public handleClick(event: MouseEvent): void {
    if (this.dragging) {
      this.dragging = false;
      return
    }
  }

}
