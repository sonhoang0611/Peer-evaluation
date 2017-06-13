import { Component, OnInit } from '@angular/core';
import { ICampaign } from './campaign';
import { CampaignService } from './campaign.service';

@Component({
    moduleId: module.id,
    templateUrl: 'campaign.component.html',
    styleUrls: ['campaign.component.css']
})

export class CampaignComponent implements OnInit {
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