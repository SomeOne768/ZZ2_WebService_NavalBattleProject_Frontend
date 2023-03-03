import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Player } from '../Player';

@Injectable()
export class PageGameService {

  constructor(
    private http: HttpClient
  ) { }

  getResultTarget$(numGame: number, numTarget: number, varLine: number, varColumn: number): Observable<void> {
    const url = `${environment.apiUrl}/Games/${numGame}/Target/${numTarget}`;
    const postBody = { column: varColumn, line: varLine };
    return this.http.post<void>(url, JSON.stringify(postBody));
  }


  get_TEST_Player$(): Observable<Player> {
    const url = `${environment.apiUrl}/Players/1`;
    return this.http.get<Player>(url);
  }

}


