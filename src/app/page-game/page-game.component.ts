import {  ViewChild, ElementRef, QueryList, ViewChildren, HostListener } from '@angular/core';
import { ASSOCIATEDSHIPS, BODY, NAME } from '../mock-map';

import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.css']
})
export class PageGameComponent implements AfterViewInit {

  ngAfterViewInit() {
    // viewChildren is set
  }
  grid = BODY;
  etat="A votre tour"
  name = NAME;
  valeur = true;

  associatedShips = ASSOCIATEDSHIPS;

  target(x: number, y: number) {
    this.valeur != this.valeur;
  }

}
