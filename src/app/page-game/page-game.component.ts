import { Component, OnInit } from '@angular/core';
import { MAP_J1, MAP_J2 } from '../mock-game';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.css']
})
export class PageGameComponent implements OnInit {

  map_j1 = MAP_J1;
  map_j2 = MAP_J2;

  current_player = { name: "Antonio", grid: "left", number: 1 }; // current_player.number <=> turn.turn_of

  turn = { number: 0, turn_of: 1 }; // turn_of is 1 or 2

  constructor() { }

  ngOnInit(): void {
  }

  clickMapJ2(event: any, i: number, j: number) {
    // check if the case is not already played
    if (event.srcElement.innerHTML == "🌊") {
      // 
      this.turn.number++;
      // change player
      if (this.turn.turn_of == 1) {
        this.turn.turn_of = 2;
      } else {
        this.turn.turn_of = 1;
      }
      //check if click on a ship, on nothing or others
      switch (this.map_j2[i][j]) {
        // simple water
        case -1:
          event.srcElement.innerHTML = "⛔";
          break;
        // part of a ship
        default:
          event.srcElement.innerHTML = "💥[" + this.map_j2[i][j]  + "]";
          break;
      }
      //console.log(event);
      //console.log("case en (" + i + ";" + j + ")");
    }

  }

}
