import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PageGameService {

    constructor(
        private http: HttpClient
    ) {}

    /*getPlayerMap$(numPlayer: string): Observable<Map> {
        const url = `${environment.apiUrl}/GetPlayerMap/${numPlayer}`;
        return this.http.get<Map>(url);
    }*/
}
