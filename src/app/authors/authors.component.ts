import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  colSpan;
  isActive = true;
  email = 'rakesh.yadav@xoriant.com';

  constructor(author: AuthorService) {
    this.authors = author.getAuthors();
    this.colSpan = 2;
  }
  onSave($event) {
    console.log('saving:\t', $event);
    $event.stopPropagation();
  }
  onDivClick($event) {
    console.log('div clicked:\t', $event);
  }
  onKeyUp() {    
    console.log('enter pressed:');
  }
  onEmailInput() {

    console.log(this.email);
  }
  ngOnInit() {
  }

}
