import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import firebase from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';

import { local as LocalStorage } from '../constants/storage';
import { url as BaseUrl, endpoints as Endpoints } from '../constants/url';
import * as config from '../constants/firebase';
import { Authentication } from '../models';

firebase.initializeApp(config);

@Injectable()
export class AuthenticationProvider {

  // Firebase

  private firebase = firebase;
  private provider = new firebase.auth.TwitterAuthProvider();

  private firebaseIdToken: string | null = null;
  private accessToken: string | null = null;
  private accessTokenSecret: string | null = null;

  // Api Key

  public apiKey: string | null;

  // User Information

  public userId: number | null;
  public userName: string | null;

  // Flag

  public isAuthenticated: boolean = false;
  public emitter = new BehaviorSubject(this.isAuthenticated);

  constructor(private http: HttpClient) {
    this.apiKey = localStorage.getItem(LocalStorage.apiKey);
    this.userId = parseInt(localStorage.getItem(LocalStorage.userId));
    this.userName = localStorage.getItem(LocalStorage.userName);
    this.setAuthenticateStatus(this.apiKey !== null);
  }

  public async authentication(): Promise<string> {
    if (this.isAuthenticated) {
      return this.apiKey;
    }

    try {
      const response = await this.firebase
        .auth()
        .signInWithPopup(this.provider);

      this.firebaseIdToken = await response.user.getIdToken();
      // any ではなく TwitterCredential を使うべきだが参照できないので any を使用する
      this.accessToken = (response.credential as any).accessToken;
      this.accessTokenSecret = (response.credential as any).secret;

      const authenticated = await this.http.post<Authentication>(
        `${BaseUrl}${Endpoints.authentication}`,
        {
          firebase_id_token: this.firebaseIdToken,
          access_token: this.accessToken,
          access_token_secret: this.accessTokenSecret
        }
      ).toPromise();

      this.userId = authenticated.id;
      this.userName = authenticated.name;
      this.apiKey = authenticated.api_key;

      // 取得したキーを保存する
      localStorage.setItem(LocalStorage.userId, this.userId.toString());
      localStorage.setItem(LocalStorage.userName, this.userName);
      localStorage.setItem(LocalStorage.apiKey, this.apiKey);

      // 認証済みにする
      this.setAuthenticateStatus(true);

      return this.apiKey;
    } catch (error) {
      (window as any).Raven.captureException(error);
      throw error;
    }
  }

  /** ユーザデータを削除する */
  public reset() {
    localStorage.removeItem(LocalStorage.userId);
    localStorage.removeItem(LocalStorage.userName);
    localStorage.removeItem(LocalStorage.apiKey);

    this.setAuthenticateStatus(false);
  }

  public getObserver(): Observable<boolean> {
    return this.emitter.asObservable();
  }

  public requestHeaders() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': this.apiKey
      }
    };
  }

  private setAuthenticateStatus(status: boolean) {
    this.isAuthenticated = status;
    this.emitter.next(this.isAuthenticated);
  }

}
