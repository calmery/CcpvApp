import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { url as BaseUrl, endpoints as Endpoints } from '../constants/url';
import { AuthenticationProvider } from './authentication';

export interface SafeAndUnSafeCount {
  safe: number;
  unsafe: number;
}

@Injectable()
export class StatisticsProvider {

  constructor(
    public http: HttpClient,
    private authenticationProvider: AuthenticationProvider
  ) {}

  public async getSafeAndUnSafeCount() {
    try {
      const response = await this.http.get<SafeAndUnSafeCount>(
        `${BaseUrl}${Endpoints.admin}`,
        { ...this.authenticationProvider.requestHeaders() }
      ).toPromise();

      return response;
    } catch (error) {
      (window as any).Raven.captureException(error);
      throw error;
    }
  }

}
