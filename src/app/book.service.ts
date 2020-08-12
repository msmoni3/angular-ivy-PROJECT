import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable()
export class BookService {
bookUrl ="/api/books";
  constructor(private http:HttpClient) { }
  getBookFromStore():Observable<Book[]>{
  return this.http.get<Book[]>(this.bookUrl);
  }

}