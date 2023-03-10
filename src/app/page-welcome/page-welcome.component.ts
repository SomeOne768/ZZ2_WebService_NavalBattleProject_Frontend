import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PageWelcomeService } from '../services/page-welcome.service'
import { Game } from '../Game';
import { Observable } from 'rxjs';
import { Player } from '../Player';


@Component({
  selector: 'app-page-welcome',
  templateUrl: './page-welcome.component.html',
  styleUrls: ['./page-welcome.component.css']
})
export class PageWelcomeComponent implements OnInit {

  sessionStorage: Storage = window.sessionStorage;
  enter_name_by_user: string = "";
  click_join: boolean = false;
  click_create: boolean = false;
  click_join_code: string = "";
  click_join_code_good: boolean = false;

  constructor(
    private service: PageWelcomeService,
    private titleService: Title,
    private router: Router
  ) {
    this.titleService.setTitle('Welcome page');
  }

  ngOnInit(): void {
    this.enter_name_by_user = "";
    this.click_join = false;
    this.click_create = false;
    this.click_join_code = "";
    this.click_join_code_good = false;
  }

  onKey_Name(event: any) {
    this.enter_name_by_user = event.target.value;
    this.click_join = false;
    this.click_join_code_good = false;
  }

  onKey_JoinCode(event: any) {
    // Because of flemme => code is idGame

    this.click_join_code = event.target.value;
    if (this.click_join_code.length > 0) {
      this.click_join_code_good = true;
      const playerId = sessionStorage.getItem('idPlayer');

      const idGame = this.click_join_code;
      if (playerId !== null)
        this.service.JoinGame(parseInt(idGame), parseInt(playerId))
          .subscribe(r => console.log(r));

      sessionStorage.setItem('idGame', idGame);


    } else {
      this.click_join_code_good = false;
    }
  }

  clickJoin(): void {
    // click
    this.click_join = true;
    this.click_create = false;

    // Create the player
    if (this.enter_name_by_user != '') {

      // Create the user
      this.service.createPlayer(this.enter_name_by_user)
        .subscribe((data: Player) => {
          // DEBUG
          console.log(data)
          const playerId = data?.id;
          const playerName = data?.name;
          if (playerId && playerName) {
            sessionStorage.setItem('idPlayer', playerId.toString());
            sessionStorage.setItem('numPlayer', "1");
          }
        });
    }
  }

  clickCreate(): void {
    //  this.service.getGame(1)
    //    .subscribe((data: Game) => { console.log(data) });
    this.click_create = true;
    this.click_join = false;

    // debug:
    // this.service.createGame()
    //   .subscribe( (data:Game) => { console.log(data)});



    if (this.enter_name_by_user != '') {

      // Create the user
      this.service.createPlayer(this.enter_name_by_user)
        .subscribe((data: Player) => {
          // DEBUG
          // console.log(data)
          const playerId = data?.id;
          if (playerId) {
            sessionStorage.setItem('idPlayer', playerId.toString());
            sessionStorage.setItem('numPlayer', "0");
          }
        });

      // Create the new game
      const playerId = sessionStorage.getItem('idPlayer');
      if (playerId !== null)
        this.service.HostGame(parseInt(playerId))
          .subscribe((data: Game) => {
            // DEBUG
            // console.log(data) ;
            const gameId = data?.idGame;
            if (gameId) {
              sessionStorage.setItem('idGame', gameId.toString());
              const playerId = sessionStorage.getItem('idPlayer');
            }
          });
      // Get the ID from session storage
      // DEBUG

      /*
      const gameId = sessionStorage.getItem('idGame');
      console.log("Fin");
      console.log(gameId);
      console.log("Fin2");
      */


      this.router.navigate(['pregame']);
    }
  }


}
