import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Game } from "../Game"
import { Player } from '../Player';
import { BODY } from '../mock-map';

@Injectable({ providedIn: 'root' })
export class PageWelcomeService {

  constructor(
    private http: HttpClient
  ) { }

  // /!\ Plus dans la version actuelle
  public getGame(id: number): Observable<Game> {
    console.log(id);
    return this.http.get<Game>(`${environment.apiUrlGame}/Games/${id}`);
  }


  public HostGame(idPlayer: number): Observable<Game> {
    const url = `${environment.apiUrlGame}/HostGame`;
    const formData = new FormData();
    formData.append('idPlayer', idPlayer.toString());
    return this.http.put<Game>(url, formData);
    // .pipe( tap(g => console.log(g)) );
  }

  public JoinGame(idGame: number, idPlayer: number): Observable<Game> {
    const url = `${environment.apiUrlGame}/JoinGame`;
    const formData = new FormData();
    formData.append('idGame', idGame.toString());
    formData.append('idPlayer', idPlayer.toString());
    return this.http.put<Game>(url, formData);
  }

  public createPlayer(nom: string): Observable<Player> {
    const url = `${environment.apiUrlPlayer}/CreatePlayer`;
    const formData = new FormData();
    formData.append('name', nom);
    sessionStorage.setItem('playerName', nom);
    return this.http.put<Player>(url, formData);
  }

  /*public associatePlayer(gameId : Number, playerId: Number, numPlayer: Number)
  {
    const url = `${environment.apiUrl}/Games/${gameId}/associate/Players/${numPlayer}`;
    const formData = new FormData();
    formData.append('id_secret_player', playerId.toString());
    return this.http.post(url, formData);
  }*/
  /*getPlayerMap$(numPlayer: string): Observable<Map> {
      const url = `${environment.apiUrl}/GetPlayerMap/${numPlayer}`;
      return this.http.get<Map>(url);
  }*/
}
