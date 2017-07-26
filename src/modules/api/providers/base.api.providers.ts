import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseApiProviders {
  // Create headers
  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({
    headers: this.headers,
    withCredentials: true
  });
  private baseUrl: string;

  constructor(private http: Http) {}

  get(url: string, params: URLSearchParams | string = ''): Observable<Response> {
    const options = new RequestOptions({
      withCredentials: true,
      search: params,
    });

    return this.http.get(this.baseUrl + url, options)
      .map(this.validateResponse)
  }

  post(url: string, body: any): Observable<Response> {
    return this.http.post(this.baseUrl + url, JSON.stringify(body), this.options)
      .map(this.validateResponse)
  }

  put(url: string, body: string): Observable<Response> {
    return this.http.put(this.baseUrl + url, JSON.stringify(body), this.options)
      .map(this.validateResponse)
  }

  del(url: string): Observable<Response> {
    return this.http.delete(this.baseUrl + url, this.options)
      .map(this.validateResponse)
  }

  private validateResponse (res: Response) {
    let response: any;
    try {
      response = res.json();
    } catch (e) {
      response = res;
    }
    return response;
  }

}
