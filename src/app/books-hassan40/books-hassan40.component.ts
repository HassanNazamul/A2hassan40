import { Component, Input } from '@angular/core';
import { Book } from '../hassan40Interface';

@Component({
  selector: 'app-books-hassan40',
  templateUrl: './books-hassan40.component.html',
  styleUrl: './books-hassan40.component.css'
})
export class BooksHassan40Component {

  @Input() myBooks991704017!: Book[];
  
  displayedColumns: string[] = ['authorName', 'bookTitle', 'published'];
}
