import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title   = "The List of the courses of the annual angular summit";
  courses;
  post;
    
  constructor(service: CoursesService) {
      this.courses = service.getCourses();
      this.post = {
        title: 'Post Title',
        isStarred: true
      };
  }

  ngOnInit() {
  }

}
export class CoursesComponent {
    
}