import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceNameService {
  constructor(private http:Http ) { }
  public get(url:any) {
    return this.http.get(url)
      .map((response: Response) => response.json());
  }
  public post(url:any, data:any) {
    return this.http.post(url, data)
                   .map((response)=>response.json());
  }
  
}