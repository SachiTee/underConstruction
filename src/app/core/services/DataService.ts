import {Injectable} from '@angular/core';
import {Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

    static ServerUrl: string = '/';

    private _serverUrl: string;

    constructor() {

    }

    get serverUrl(): string {
        return DataService.ServerUrl;
    }

    handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    buildQuery(params: any): URLSearchParams {
        let urlParams = new URLSearchParams();

        for (let key in params) {
            urlParams.append(key, params[key]);
        }

        return urlParams;
    }
}