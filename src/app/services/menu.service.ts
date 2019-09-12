import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IMenu } from '../models/menu';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://ab-recruit-menu.azurewebsites.net/api/GetMenuStructure?role=';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMenu(role: string): Observable<IMenu> {
    const url = `${apiUrl}+${role}`;
    return this.http.get<IMenu>(url).pipe(
      tap(_ => console.log(`fetched menus id=${role}`)),
      catchError(this.handleError<IMenu>(`getMenu id=${role}`))
    );
  }
}
