import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  title   = "The List of the courses of the annual angular summit";
  courses;
  post;
  service;
    
  constructor(service: CoursesService) {
      this.courses = [];
      this.service = service;
      this.post = {
        title: 'Post Title',
        isStarred: true
      };
  }

  loadCourses() {
    this.courses = this.service.getCourses(); 
  }

  trackCourse(index, course) {
    return course ? course.title : undefined;
  }

  onFavouriteChange(isSelected) {
    console.log('Favourite changed:\t', isSelected);
  }

}
export class CoursesComponent {
    
}