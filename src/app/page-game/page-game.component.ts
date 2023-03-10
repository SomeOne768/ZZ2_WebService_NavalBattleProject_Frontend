import { Component, OnInit } from '@angular/core';
import { PageGameService } from '../services/page-game.service'
import { MAP } from '../mock-game';
import { interval } from 'rxjs';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.css']
})
export class PageGameComponent implements OnInit {

  map_j1: number[][];
  map_j2: number[][];
  idGame: string;
  numPlayer: string;

  sessionStorage: Storage = window.sessionStorage;
  current_player = { name: sessionStorage.getItem('playerName'), grid: (sessionStorage.getItem('numPlayer') == "0") ? "left" : "right", number: sessionStorage.getItem('numPlayer') };

  turn = { number: 0, turn_of: true };

  constructor(private service: PageGameService) {
    this.idGame = sessionStorage.getItem("idGame")!;
    this.numPlayer = sessionStorage.getItem("numPlayer")!;
    this.service.getMap(parseInt(this.idGame), parseInt(this.numPlayer)).subscribe(
      r => {
        if (this.numPlayer === "0") {
          this.map_j1 = r.body;
          this.map_j2 = MAP;
        }
        else {
          this.map_j1 = MAP;
          this.map_j2 = r.body;
        }
      });
  }

  ngOnInit(): void {
    const source = interval(5000);
    source.subscribe(() => {
      this.service.getMap(parseInt(this.idGame), parseInt(this.numPlayer)).subscribe(
        r => {
          if (this.numPlayer === "0") {
            this.map_j1 = r.body;
            this.map_j2 = MAP;
          }
          else {
            this.map_j1 = MAP;
            this.map_j2 = r.body;
          }
        });
      this.service.getGame(parseInt(this.idGame)).subscribe(r => this.turn.turn_of = r.tourA);
    })
    // Instruction
  }

  clickMapJ2(event: any, i: number, j: number) {
    // check if the case is not already played
    if (this.numPlayer === '0') {
      if (this.idGame !== null && this.numPlayer !== null)
        this.service.getResultTarget(parseInt(this.idGame), parseInt(this.numPlayer), i, j).subscribe(r => {
          switch (r) {
            // simple water
            case -3:
              event.srcElement.innerHTML = "⛔";
              break;
            // part of a ship
            default:
              event.srcElement.innerHTML = "💥";
              break;
          }
          this.turn.number++;
          this.turn.turn_of = !this.turn.turn_of;
        })
    }
  }

  clickMapJ1(event: any, i: number, j: number) {
    // check if the case is not already played

    if (this.numPlayer === '1') {
      let result: number = 0;
      if (this.idGame !== null && this.numPlayer !== null)
        this.service.getResultTarget(parseInt(this.idGame), parseInt(this.numPlayer), i, j).subscribe(r => {
          switch (r) {
            // simple water
            case -3:
              event.srcElement.innerHTML = "⛔";
              break;
            // part of a ship
            default:
              event.srcElement.innerHTML = "💥";
              break;
          }
          this.turn.number++;
          this.turn.turn_of = !this.turn.turn_of;
        })
    }
  }

}
