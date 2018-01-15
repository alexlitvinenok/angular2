import { Component } from '@angular/core';
import { Course } from './course';
import { COURSES_DATA } from "./cousesData";

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent { 
  courses = COURSES_DATA;
}
