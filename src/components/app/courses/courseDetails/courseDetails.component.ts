import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../course';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'course-details',
  templateUrl: './courseDetails.component.html',
  styleUrls: ['./courseDetails.component.css']
})
export class CourseDetailsComponent {
  @Input() course: Course;
  @Output() onDeleted = new EventEmitter<number>();

  getFormattedDuration (duration : number): string {
    let h : number = (duration / 60) | 0;
    return h + ":" + (duration % 60) + "h";
  }

  delete(id: number) {
    this.onDeleted.emit(id);
  }
}
