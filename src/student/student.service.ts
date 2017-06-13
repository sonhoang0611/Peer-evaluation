import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IStudent } from './student';

@Injectable()

export class StudentService {
    private _studentsUrl = './assets/data/students.json'; 

    constructor(private _http: Http){}

    getStudents(): Observable<IStudent[]> {
        return this._http.get(this._studentsUrl)
            .map((response: Response) => <IStudent[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}