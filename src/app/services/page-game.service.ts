import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Player } from '../Player';
import { Game } from "../Game"

@Injectable({ providedIn: 'root' })
export class PageGameService {

  constructor(
    private http: HttpClient
  ) { }

  getResultTarget(numGame: number, numTarget: number, varLine: number, varColumn: number): Observable<number> {
    const url = `${environment.apiUrlGame}/Games/${numGame}/Target/${numTarget}`;
    const formData = new FormData();
    formData.append('line', varLine.toString());
    formData.append('column', varColumn.toString());
    return this.http.put<number>(url, formData);
  }

  getMap(idGame: number, numPlayer: number): Observable<any> {
    const url = `${environment.apiUrlGame}/Games/${idGame}/Maps/${numPlayer}`;
    return this.http.get(url);
  }

  get_TEST_Player$(): Observable<Player> {
    const url = `${environment.apiUrlGame}/Players/1`;
    return this.http.get<Player>(url);
  }

  public getGame(id: number): Observable<Game> {
    console.log(id);
    return this.http.get<Game>(`${environment.apiUrlGame}/Games/${id}`);
  }

}


