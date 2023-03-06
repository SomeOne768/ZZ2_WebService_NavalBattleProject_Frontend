import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Game } from "../Game"
import { Player } from '../Player';

@Injectable({providedIn:'root'})
export class PageWelcomeService {

    constructor(
        private http: HttpClient
    ) {}

  public getGame(id: number): Observable<Game> {
    console.log(id);
    return this.http.get<Game>(`${environment.apiUrl}/Games/${id}`);
  }

  public createGame() : Observable<Game>
  {
    const url = `${environment.apiUrl}/Games`;
    
    return this.http.put<Game>(url, null).pipe(
      tap(g => console.log(g))
    );
  }

  public createPlayer(nom: string): Observable<Player> {
    const url = `${environment.apiUrl}/CreatePlayer`;
    const formData = new FormData();
    formData.append('name', nom);
    return this.http.put<Player>(url, formData);
  }

    /*getPlayerMap$(numPlayer: string): Observable<Map> {
        const url = `${environment.apiUrl}/GetPlayerMap/${numPlayer}`;
        return this.http.get<Map>(url);
    }*/
}
