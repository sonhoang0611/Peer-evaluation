import { Component } from '@angular/core';
import { StudentService } from 'student/student.service';
import { CampaignService } from 'campaign/campaign.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService, CampaignService]
})
export class AppComponent {
  title = 'app works!';
}
