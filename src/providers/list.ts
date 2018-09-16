import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ListProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ListProvider Provider');
  }

}
