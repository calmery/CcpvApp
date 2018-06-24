import firebase from 'firebase'
import axios from 'axios'

import { local as LocalStorage } from 'constants/storage'
import { url as BaseUrl, endpoints as Endpoints } from 'constants/url'
import * as config from 'constants/firebase'

firebase.initializeApp(config)

class Authentication {
  constructor(firebase) {
    this._firebase = firebase
    this._provider = new firebase.auth.TwitterAuthProvider()

    // Firebase での認証完了の際に受け取る値を格納する
    this._firebaseIdToken = null
    this._accessToken = null
    this._accessTokenSecret = null

    // API キーをストレージから読み込む（認証が完了していない場合，null になる）
    this._apiKey = localStorage.getItem(LocalStorage.apiKey)

    // ユーザ ID，ユーザ名があれば読み込む（認証が完了していない場合，null になる）
    this._userId = localStorage.getItem(LocalStorage.userId)
    this._userName = localStorage.getItem(LocalStorage.userName)

    // API キーがあれば認証済みとして扱う
    this._isAuthenticated = this._apiKey !== null
  }

  // 認証する
  async authentication() {
    // 認証済みの場合，API キーを返却する
    if (this.isAuthenticated()) {
      return this._apiKey
    }

    try {
      const response = await this._firebase
        .auth()
        .signInWithPopup(this._provider)

      this._firebaseIdToken = await response.user.getIdToken()
      this._accessToken = response.credential.accessToken
      this._accessTokenSecret = response.credential.secret

      const authenticated = await axios.post(
        `${BaseUrl}${Endpoints.authentication}`,
        {
          firebase_id_token: this._firebaseIdToken,
          access_token: this._accessToken,
          access_token_secret: this._accessTokenSecret
        }
      )

      this._userId = authenticated.data.id
      this._userName = authenticated.data.name
      this._apiKey = authenticated.data.api_key

      // 取得したキーを保存する
      localStorage.setItem(LocalStorage.userId, this._userId)
      localStorage.setItem(LocalStorage.userName, this._userName)
      localStorage.setItem(LocalStorage.apiKey, this._apiKey)

      // 認証済みの状態にする
      this._isAuthenticated = true

      return this._apiKey
    } catch (error) {
      throw error
    }
  }

  // 認証しているかを調べる
  isAuthenticated() {
    return this._isAuthenticated
  }

  // API のリクエストに必要なキーをストレージから削除する
  reset() {
    localStorage.removeItem(LocalStorage.userId, this._userId)
    localStorage.removeItem(LocalStorage.userName, this._userName)
    localStorage.removeItem(LocalStorage.apiKey, this._apiKey)

    this._isAuthenticated = false
  }

  // Get

  getUserId() {
    return this._userId
  }

  getApiKey() {
    return this._apiKey
  }

  getUserName() {
    return this._userName
  }
}

export default new Authentication(firebase)
