import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { url as BaseUrl, endpoints as Endpoints } from '../constants/url';
import { AuthenticationProvider } from './authentication';
import { List } from '../models';

@Injectable()
export class ListProvider {

  constructor(
    public http: HttpClient,
    private authenticationProvider: AuthenticationProvider
  ) {}

  /** 所有する全てのリストを取得する */
  public async getMyLists(): Promise<List[]> {
    try {
      const lists = await this.http.get<List[]>(
        `${BaseUrl}${Endpoints.list}`,
        { ...this.authenticationProvider.requestHeaders() }
      ).toPromise();

      return lists;
    } catch(error) {
      throw error;
    }
  }

  /** 受け取った ID に対応したリストが自身の所有するリストだった場合にその内容を取得する */
  public async get(id: number) {
    try {
      const list = await this.http.get(
        `${BaseUrl}${Endpoints.list}/${id}`,
        { ...this.authenticationProvider.requestHeaders() }
      ).toPromise();

      return list;
    } catch(error) {
      throw error;
    }
  }

  /** 投稿に紐づいているフラグを更新する */
  public async post(id: number, updated: any) {

  }

}
