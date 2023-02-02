import { Component, OnInit } from '@angular/core';
import { GRID } from '../mock-grid';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.css']
})

export class PageGameComponent implements OnInit {

  grid = GRID;

  constructor() {}

  ngOnInit(): void {}

}
