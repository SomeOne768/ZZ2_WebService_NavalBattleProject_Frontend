import { Component, ViewChild, ElementRef, QueryList, AfterViewInit, ViewChildren } from '@angular/core';
import { ASSOCIATEDSHIPS, BODY, NAME } from '../mock-map';

@Component({
  selector: 'app-page-pregame',
  templateUrl: './page-pregame.component.html',
  styleUrls: ['./page-pregame.component.css']
})

export class PagePregameComponent implements AfterViewInit {

  @ViewChildren('ships') ships: QueryList<ElementRef>;
  currentShip = {x: -1, y: -1, rotation: 0};

  grid = BODY;
  @ViewChild('gridDisplay') gridDisplay: ElementRef;
  gridDisplayPosition = {x: -1, y: -1, w: -1, h: -1};

  name = NAME;

  associatedShips = ASSOCIATEDSHIPS;

  public dragging: boolean;

  constructor() {
    this.dragging = false;
  }

  ngAfterViewInit() {
    // viewChildren is set
  }

  createRange(number: number){
    // return new Array(number);
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

  public handleDragStart(event: any): void {
    this.dragging = true;
  }

  public handleClick(event: MouseEvent, ship_id: number): void {

    // actualise la position de la grille affichee
    this.gridDisplayPosition.x = this.gridDisplay.nativeElement.getBoundingClientRect().left; 
    this.gridDisplayPosition.y = this.gridDisplay.nativeElement.getBoundingClientRect().top;
    this.gridDisplayPosition.w = this.gridDisplay.nativeElement.offsetWidth;
    this.gridDisplayPosition.h = this.gridDisplay.nativeElement.offsetHeight;
    // si on le tenait
    if (this.dragging) {
      // on lache
      this.dragging = false;
      // on a tous les bateaux
      this.ships.forEach((child) => {
        // chope le bateau avec le bon id (celui qu'on clique)
        if(ship_id == child.nativeElement.id){
          // actualise le bateau courant
          this.currentShip.x = child.nativeElement.getBoundingClientRect().left;
          this.currentShip.y = child.nativeElement.getBoundingClientRect().top;
        }
      });
      // on regarde si le coin en haut a gauche du bateau est dans la map
      if(
        this.currentShip.x > this.gridDisplayPosition.x 
        && this.currentShip.x < this.gridDisplayPosition.x + this.gridDisplayPosition.w
        && this.currentShip.y > this.gridDisplayPosition.y
        && this.currentShip.y < this.gridDisplayPosition.y + this.gridDisplayPosition.h
      ){
        // bateau lache dans la map
        // calcul pour savoir quelles cases de la map on change
        let countOnX = 0;
        let countOnY = 0;
        // distance entre bateau est bord
        countOnX = Math.ceil((this.currentShip.x - this.gridDisplayPosition.x)/56)-1; // 52 = largeur case (50px) + border de chaque cote (1px par cote) + ecart entre 2 cases (2.44px)
        countOnY = Math.ceil((this.currentShip.y - this.gridDisplayPosition.y)/56)-1;
        //mettre le bateau dans la grille
        // horizontale
        if(this.associatedShips[ship_id].orientation == 0){
          // si le bateau rentre
          if(countOnX + this.associatedShips[ship_id].size <= 10){ //10 = taille de la grille
            // check que de l'eau
            let queDeLeau = true;
            for(let i=0; i < this.associatedShips[ship_id].size; i++){
              if(this.grid[countOnY][countOnX + i] != -1){
                queDeLeau = false;
              }
            }
            if(queDeLeau == true){
              //remplissage dans la grille, pour la taille
              for(let i=0; i < this.associatedShips[ship_id].size; i++){
                this.grid[countOnY][countOnX + i] = ship_id;
              }
            }
          }  
        }
        // verticale
        else{
          // si le bateau rentre
          if(countOnY + this.associatedShips[ship_id].size <= 10){ //10 = taille de la grille
            // check que de l'eau
            let queDeLeau = true;
            for(let i=0; i < this.associatedShips[ship_id].size; i++){
              if(this.grid[countOnY + i][countOnX] != -1){
                queDeLeau = false;
              }
            }
            if(queDeLeau == true){
              //pour la taille
              for(let i=0; i < this.associatedShips[ship_id].size; i++){
                this.grid[countOnY + i][countOnX] = ship_id;
              }
            }
          }  
        }
        // actualise les donnes en base de donnee
        // TODO !


        /*
        // on disabled le bateau pose 
        this.ships.forEach((child) => {
        
        });
        */

        // clean currentship et utiliser this.associated ship [id] !!

      }



   
    }

  }

}
