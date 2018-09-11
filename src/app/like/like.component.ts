import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'twitter-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  styles: [`
  .glyphicon-heart:hover {
    cursor: pointer;
  }
  .isActive {
    color:red;
  }
  `]
})

export class LikeComponent implements OnInit {
  @Input('like-state') isLiked: boolean;
  @Input('like-count') likeCount;

  onClicked($event) {
    this.isLiked = !this.isLiked;
    this.likeCount = this.likeCount + (this.isLiked ? 1 : -1);
  }
}
