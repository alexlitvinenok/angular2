import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Course } from './course';
import { COURSES_DATA } from "./cousesData";

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent { 
  //courses = COURSES_DATA;
  courses = [];

  ngOnInit() {
    console.log("onInit");
    this.courses = COURSES_DATA;
  }

  ngDoCheck() {
    console.log("doCheck");
  }

  ngOnChanges() {
    console.log("onChanges");
  }

  ngAfterContentInit() {
    console.log("afterContentInit");
  }

  ngAfterContentChecked() {
    console.log("afterContentChecked");
  }

  ngAfterViewInit() {
    console.log("afterViewInit");
  }

  ngAfterViewChecked() {
    console.log("afterViewChecked");
  }

  ngOnDestroy() {
    console.log("onDestroy");
  }

  onDeleted(id: number) : void {
    this.courses.forEach((element, index) => {
      if (element.id === id) {
        delete this.courses[index];
      };
    });
  }
}
