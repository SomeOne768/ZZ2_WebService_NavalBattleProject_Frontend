import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({providedIn:'root'})
export class PagePregameService {

    constructor(
        private http: HttpClient
    ) {}


    public putShip(idGame: number, numPlayer: number, numShip: number, line: number, column: number, orientation: number)
    {
        const url = `${environment.apiUrl}/Games/${idGame}/PutShip/${numPlayer}`;
        const body = {line, column, orientation};
        return this.http.put(url, body);
    }
    /*
    getPlayerMap$(numPlayer: string): Observable<Map> {
        const url = `${environment.apiUrl}/GetPlayerMap/${numPlayer}`;
        return this.http.get<Map>(url);
    }
    
    createUserCoorgEvents$(createUserCoorgEvent: EventEditable): Observable<void> {
        const url = `${environment.apiUrl}/user-coorg-event`;
        return this.http.post<void>(url, createUserCoorgEvent);
    }
    
    deleteEvent$(id: string): Observable<number> {
        const url = `${environment.apiUrl}/event/${id}`;
        return this.http.delete<number>(url);
    }

    getEvents$(): Observable<Event[]> {
        const url = `${environment.apiUrl}/event`;
        return this.http
            .get<Event[]>(url);
    }

    getOneEvent$(id: string): Observable<Event> {
        const url = `${environment.apiUrl}/event/${id}`;
        return this.http.get<Event>(url);
    }

    updateEvent$(id: string, updateEvent: EventCreationRequest): Observable<void> {
        const url = `${environment.apiUrl}/event/${id}`;
        return this.http.post<void>(url, updateEvent);
    }

    createEvent$(createEvent: EventCreationRequest): Observable<void> {
        const url = `${environment.apiUrl}/event`;
        return this.http.post<void>(url, createEvent);
    }
    
    */
}
