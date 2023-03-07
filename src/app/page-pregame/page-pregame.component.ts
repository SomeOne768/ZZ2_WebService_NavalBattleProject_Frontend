import { Component, ViewChild, ElementRef, QueryList, AfterViewInit, ViewChildren, HostListener } from '@angular/core';
import { ASSOCIATEDSHIPS, BODY, NAME } from '../mock-map';
import { PagePregameService } from '../services/page-pregame.service'

@Component({
  selector: 'app-page-pregame',
  templateUrl: './page-pregame.component.html',
  styleUrls: ['./page-pregame.component.css']
})

// todo :
// [ ] fix display block, flex qui move le menu sur le bord gauche
// [x] faire le bouton pour reset la grille de jeu
// [x] faire que si tous les bateaux sont poses on peut lancer la partie

export class PagePregameComponent implements AfterViewInit {
  sessionStorage: Storage = window.sessionStorage;

  @ViewChildren('ships') ships: QueryList<ElementRef>;

  grid = BODY;
  @ViewChild('gridDisplay') gridDisplay: ElementRef;
  gridDisplayPosition = {x: -1, y: -1, w: -1, h: -1};

  name = NAME;

  associatedShips = ASSOCIATEDSHIPS;

  public dragging: boolean;
  public current_ship_id: number;
  public go_disabled: boolean;
  
  // public service: PagePregameService;

  constructor(private service: PagePregameService) {
    this.dragging = false;
    this.current_ship_id = -1;
    this.go_disabled = true;
  }

  ngAfterViewInit() {
    // viewChildren is set
  }

  createRange(number: number){
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

  reloadPage() {
    window.location.reload();
  }

  public handleDragStart(event: any, shipId: number): void {
    this.dragging = true;
    this.current_ship_id = shipId;
  }

  // mise a jour de l'orientation du bateau dans la BDD
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.key == 'r' && this.dragging == true){
      if(this.associatedShips[this.current_ship_id].orientation == 0){
        // verticale
        this.associatedShips[this.current_ship_id].orientation = 1;
      }else {
        // horizontale
        this.associatedShips[this.current_ship_id].orientation = 0;
      }
    }
  }

  public handleClick(event: MouseEvent, ship_id: number): void {
    // actualise
    this.current_ship_id = ship_id;
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
          this.associatedShips[ship_id].hookX = child.nativeElement.getBoundingClientRect().left;
          this.associatedShips[ship_id].hookY = child.nativeElement.getBoundingClientRect().top;
        }
      });
      // on regarde si le coin en haut a gauche du bateau est dans la map
      if(
        this.associatedShips[ship_id].hookX > this.gridDisplayPosition.x 
        && this.associatedShips[ship_id].hookX < this.gridDisplayPosition.x + this.gridDisplayPosition.w
        && this.associatedShips[ship_id].hookY > this.gridDisplayPosition.y
        && this.associatedShips[ship_id].hookY < this.gridDisplayPosition.y + this.gridDisplayPosition.h
      ){
        // bateau lache dans la map
        // calcul pour savoir quelles cases de la map on change
        let countOnX = 0;
        let countOnY = 0;
        // distance entre bateau est bord
        countOnX = Math.ceil((this.associatedShips[ship_id].hookX - this.gridDisplayPosition.x)/56)-1; // 52 = largeur case (50px) + border de chaque cote (1px par cote) + ecart entre 2 cases (2.44px)
        countOnY = Math.ceil((this.associatedShips[ship_id].hookY - this.gridDisplayPosition.y)/56)-1;
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
              //on disabled le bateau pose 
              this.associatedShips[ship_id].located = 1;
              const gameId = this.sessionStorage.getItem('idGame');
              const numPlayer = this.sessionStorage.getItem('numPlayer');
              if(gameId && numPlayer)
              {
                this.service.putShip(parseInt(gameId), parseInt(numPlayer) , ship_id,this.associatedShips[ship_id].hookX , this.associatedShips[ship_id].hookY, 1)
                .subscribe( r => {
                  if(r!=null)
                    console.log(r);
                });
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
              //on disabled le bateau pose 
              this.associatedShips[ship_id].located = 1;
              const gameId = this.sessionStorage.getItem('idGame');
              const numPlayer = this.sessionStorage.getItem('numPlayer');
              if(gameId && numPlayer)
              {
                this.service.putShip(parseInt(gameId), parseInt(numPlayer) , ship_id,this.associatedShips[ship_id].hookX , this.associatedShips[ship_id].hookY, 1)
                .subscribe( r => {
                  if(r!=null)
                    console.log(r);
                });
              }
              
            }
          }  
        }
      }
      // check si on a pose tous les bateaux
      let sumShipLocated = 0;
      this.associatedShips.forEach((child) => {
        if(child.located == 1){
          sumShipLocated = sumShipLocated + 1;
        }
      });
      // si on a le meme nombre de bateau et de pose alors on peut go
      if(this.associatedShips.length == sumShipLocated){
        this.go_disabled = false;
      }
    }
    


  }

}


