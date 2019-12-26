"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Context {
    get request() {
        return this._request;
    }
    set request(value) {
        this._request = value;
    }
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
}
exports.Context = Context;
