import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',  
  styleUrls: ['./favourite.component.css'],
  styles: [`
  .glyphicon {
    color: green;
  }
  .glyphicon-star {
    background-color: black;
  }
  `]
})
export class FavouriteComponent implements OnInit {

  @Input('is-Starred') isFavourite = false;
  @Output() change = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onStarClicked() {
    this.isFavourite = !this.isFavourite; 
    this.change.emit(this.isFavourite);
  }

}
