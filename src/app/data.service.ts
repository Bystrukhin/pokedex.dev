import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import api from '../constants/hosts';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()

export class DataService {

    constructor(private http: Http) { }

    getPokemons(): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json, image/png, text/html');
        headers.append('Accept', 'application/json, image/png, text/html, image/webp,image/apng,image/*,*/*');
        const options = new RequestOptions({ headers: headers });

        return this.http.get(`${api}api/v1/pokemon/?limit=12`, options)
            .map(res => res.json());
    }
}
