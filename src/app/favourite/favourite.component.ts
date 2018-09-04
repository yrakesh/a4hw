import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  isStarred = false;
  
  constructor() { }

  ngOnInit() {
  }

  onStarClicked() {
    this.isStarred = !this.isStarred; 
  }

}
