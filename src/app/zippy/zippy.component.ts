import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  isClosed: Boolean = true;
 
  constructor() { }

  ngOnInit() {
  }

  onHeaderClicked($event) {
    this.isClosed = !this.isClosed;
  }

}
