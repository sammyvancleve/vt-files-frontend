import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private queryUrl: string;

  constructor (private http: HttpClient) {
    //this.queryUrl = 'http://localhost:8080/api/main?q=';
    this.queryUrl = 'http://40.71.97.215:8080/api/main?q=';
  }

  public getLicense(query: string): Observable<ArrayBuffer> {
    return this.http.get(this.queryUrl.concat(query), {responseType: 'arraybuffer'}
    );
  }

}
