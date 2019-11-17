import { OnInit, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable(
  {providedIn: 'root'}
)
export class HelloService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit() { }

  getDados(): Observable<any> {
    return this.http.get<any>('/api')
      .pipe(
        tap(dados => console.log('leu os dados')),
        catchError(this.handleError('getDados', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
