import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }
  getAuthors() {
    return ['Manjari', 'Rakesh', 'Ganesh', 'Jeegar', 'Anil'];
  }

}
