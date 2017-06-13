import { Component, OnInit } from '@angular/core';
import { IStudent } from './student';
import { StudentService } from './student.service';

@Component({
    moduleId: module.id,
    templateUrl: 'student-list.component.html',
     styleUrls: ['student-list.component.css']
})

export class StudentListComponent implements OnInit {
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