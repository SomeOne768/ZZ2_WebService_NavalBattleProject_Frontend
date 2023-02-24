import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PageGameService {

  constructor(
    private http: HttpClient
  ) { }

  getResultTarget$(numGame: number, numTarget: number, varLine: number, varColumn: number): Observable<void> {
    const url = `${environment.apiUrl}/Games/${numGame}/Target/${numTarget}`;
    const postBody = { column: varColumn, line: varLine };
    return this.http.post<void>(url, postBody);
  }
}

/*getPlayerMap$(numPlayer: string): Observable<Map> {
    const url = `${environment.apiUrl}/GetPlayerMap/${numPlayer}`;
    return this.http.get<Map>(url);
}*/

