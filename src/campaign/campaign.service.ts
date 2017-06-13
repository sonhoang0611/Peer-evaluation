import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ICampaign } from './campaign';

@Injectable()

export class CampaignService {
    private _campaignUrl = './assets/data/campaigns.json'; 

    constructor(private _http: Http){}

    getCampaigns(): Observable<ICampaign[]> {
        return this._http.get(this._campaignUrl)
            .map((response: Response) => <ICampaign[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}