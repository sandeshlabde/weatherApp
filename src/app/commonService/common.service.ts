import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, of, switchMap, throwError } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  getXmlHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.set("Content-Type", "text/xml");
    return headers;
  }
  handleError(error:Error):any {
    try {
      const errorMessage =
        "We are facing some issue while getting data. Please  check City name or internet connection.";
      
      alert(errorMessage)

      return throwError(errorMessage);
    } catch (error) {
      console.error(error);
    }
  } 
  cityName=''
  constructor(private http: HttpClient,) { }
  getCurrentWeatherData(param:any): Observable<any>|any{
    try {
      return this.http
        .get(`https://api.openweathermap.org/data/2.5/${param.url}&appid=94684a7c9a9e87b92b2c6418e9e984ce
        `, param, 
           )
        .pipe(catchError(this.handleError));
    } catch (error) {
      console.error(error);
    }
  }
  
  title$: BehaviorSubject<any> = new BehaviorSubject<string>('');
  updateTitle(title: string) {
    this.title$.next(title);
  }
}
