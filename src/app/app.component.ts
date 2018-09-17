import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tweet = {
    body: 'this is the tweet body',
    isLiked: !true,
    likeCount: 487,
    creator: null 
  }
}
