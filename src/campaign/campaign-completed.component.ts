import { Component, OnInit } from '@angular/core';
import { ICampaign } from './campaign';
import { CampaignService } from './campaign.service';

@Component({
    moduleId: module.id,
    templateUrl: 'campaign-completed.component.html',
    styleUrls: ['campaign-completed.component.css']
})

export class CampaignCompletedComponent implements OnInit {
    campaigns: ICampaign[];
    errorMessage: string;

    constructor(private _campaignService: CampaignService){

    }

    ngOnInit(): void {
        this._campaignService.getCampaigns().subscribe(
            campaigns => this.campaigns = campaigns,
            error => this.errorMessage = <any>error
        );
    }
}