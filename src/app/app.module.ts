import { CustomTitleCasePipe } from './customTitleCase.pipe';
import { SummaryPipe } from './summary.pipe';
import { AuthorService } from './author.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavouriteComponent,
    CustomTitleCasePipe,
    PanelComponent,
    LikeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
