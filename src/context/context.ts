import { IncomingMessage } from 'http';

export interface JwtToken {
  claims: object;
}

export class Context {
  private _request: IncomingMessage;

  private _token: JwtToken;

  get request(): IncomingMessage {
    return this._request;
  }

  set request(value: IncomingMessage) {
    this._request = value;
  }

  get token(): JwtToken {
    return this._token;
  }

  set token(value: JwtToken) {
    this._token = value;
  }
}
