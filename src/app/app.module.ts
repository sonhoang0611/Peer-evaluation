import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentListComponent } from 'student/student-list.component';
import { StudentViewComponent } from 'student/student-view.component';
import { StudentSubmissionComponent } from 'student/student-submission.component';
import { StudentFeedbackComponent } from 'student/student-feedback.component';
import { DashboardComponent } from 'dashboard/dashboard.component';
import { CampaignComponent } from 'campaign/campaign.component';
import { CampaignEnrollmentComponent } from 'campaign/campaign-enrollment.component';
import { CampaignFormComponent } from 'campaign/campaign-form.component';
import { CampaignCompletedComponent } from 'campaign/campaign-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentViewComponent,
    StudentSubmissionComponent,
    StudentFeedbackComponent,
    DashboardComponent,
    CampaignComponent,
    CampaignEnrollmentComponent,
    CampaignFormComponent,
    CampaignCompletedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'student-list', component: StudentListComponent
      },
      {
        path: 'student-view', component: StudentViewComponent
      },
      {
        path: 'student-view/submission', component: StudentSubmissionComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'campaign', component: CampaignComponent
      },      
      {
        path: 'campaign/form', component: CampaignFormComponent
      },
      {
        path: 'campaign/enrollment', component: CampaignEnrollmentComponent
      },
      {
        path: 'completion', component: CampaignCompletedComponent
      },  
      {
        path: 'completion/feedback', component: StudentFeedbackComponent
      }, 
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'dashboard', pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
