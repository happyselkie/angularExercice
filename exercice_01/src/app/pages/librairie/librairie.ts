import { Component } from '@angular/core';
import {Book} from './book';
import {IsreadEmojiPipe} from '../../utils/isread-emoji-pipe';

@Component({
  selector: 'app-librairie',
  imports: [
    IsreadEmojiPipe
  ],
  templateUrl: './librairie.html',
  styleUrl: './librairie.css'
})

export class Librairie {
  book1 : Book = {
    title : "La Horde du Contrevent",
    author : "Alain Damasio",
    isRead : true
  }

  book2 : Book = {
    title : "Farenheit 451",
    author : "Ray Bradbury",
    isRead : true
  }

  book3 : Book = {
    title : "Ubik",
    author : "Philip K. Dick",
    isRead : true
  }

  book4 : Book = {
    title : "Crash !",
    author : "James Ballard",
    isRead : false
  }

  book5 : Book = {
    title : "Ravage",
    author : "René Barjavel",
    isRead : false
  }

  bookList : Book[] = [this.book1, this.book2, this.book3, this.book4, this.book5]

  toogleIsRead(book : Book) : Book{
    if (book.isRead) book.isRead = false;
    else book.isRead = true;
    return book;
  }



}
