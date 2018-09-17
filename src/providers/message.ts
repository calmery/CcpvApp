import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { url as BaseUrl, endpoints as Endpoints } from '../constants/url';
import { AuthenticationProvider } from './authentication';
import { Message, Messages } from '../models';

@Injectable()
export class MessageProvider {

  constructor(
    public http: HttpClient,
    private authenticationProvider: AuthenticationProvider
  ) {}

  /** メッセージのリストを取得する */
  public async get(next?: number): Promise<Messages> {
    try {
      const url = `${BaseUrl}${Endpoints.messages}` + (next === undefined ? '' : `?start=${next}`);

      const response = await this.http.get<Messages>(
        url,
        { ...this.authenticationProvider.requestHeaders() }
      ).toPromise();

      return response;
    } catch (error) {
      (window as any).Raven.captureException(error);
      throw error;
    }
  }

  /** Only Admin: トップページに表示されるメッセージを投稿する */
  public async post(title: string, message: string): Promise<Message> {
    try {
      if (!this.authenticationProvider.isAdmin) {
        throw new Error();
      }

      const response = await this.http.post<Message>(
        `${BaseUrl}${Endpoints.message}`,
        { title, message },
        { ...this.authenticationProvider.requestHeaders() }
      ).toPromise();

      return response;
    } catch (error) {
      (window as any).Raven.captureException(error);
      throw error;
    }
  }

  /** Only Admin: トップページに表示されるメッセージを削除する */
  public async delete(id: number): Promise<void> {
    try {
      if (!this.authenticationProvider.isAdmin) {
        throw new Error();
      }

      await this.http.delete(
        `${BaseUrl}${Endpoints.message}/${id}`,
        { ...this.authenticationProvider.requestHeaders() }
      ).toPromise();

      return;
    } catch (error) {
      (window as any).Raven.captureException(error);
      throw error;
    }
  }

}
