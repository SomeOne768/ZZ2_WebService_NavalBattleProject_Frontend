import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  ngOnInit() {}

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

      
      console.log("lache!");
      /*
      [ ] recuperer le coin en haut a gauche du bateau gris
      [ ] recuperer le coin en haut a gauche de la map bleu
      [ ] faire le calcul pour voir si le bateau entier est dans la grille
      [ ] remplacer les cases dans la map 
      */
    }
    //this.grid[5][5] = 0;
  }

}
