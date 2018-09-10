import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('is-Starred') isFavourite = false;
  
  constructor() { }

  ngOnInit() {
  }

  onStarClicked() {
    this.isFavourite = !this.isFavourite; 
  }

}
