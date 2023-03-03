import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Game } from "../Game"

@Injectable({providedIn:'root'})
export class PageWelcomeService {

    constructor(
        private http: HttpClient
    ) {}

  public getGame(id: number): Observable<Game> {
    console.log(id);
    return this.http.get<Game>(`https://localhost:7152/api/GameArea/Games/${id}`);
  }
    /*getPlayerMap$(numPlayer: string): Observable<Map> {
        const url = `${environment.apiUrl}/GetPlayerMap/${numPlayer}`;
        return this.http.get<Map>(url);
    }*/
}
