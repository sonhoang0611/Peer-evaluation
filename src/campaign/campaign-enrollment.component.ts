import { Component, OnInit } from '@angular/core';
import { IStudent } from '../student/student';
import { StudentService } from '../student/student.service';

@Component({
    moduleId: module.id,
    templateUrl: 'campaign-enrollment.component.html',
    styleUrls: ['campaign-enrollment.component.css']
})

export class CampaignEnrollmentComponent implements OnInit {
    students: IStudent[];
    errorMessage: string;

    constructor(private _studentService: StudentService){

    }

    ngOnInit(): void {
        this._studentService.getStudents().subscribe(
            students => this.students = students,
            error => this.errorMessage = <any>error
        );
    }
}