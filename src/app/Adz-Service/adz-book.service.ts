import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Book} from '../Adz-Model/Book'
@Injectable({
  providedIn: 'root'
})
export class AdzBookService {
 url ="https://www.googleapis.com/books/v1/volumes?q=";
urlId="https://www.googleapis.com/books/v1/volumes/";
  constructor( private http: HttpClient ){
    
  }

   //recherche generique
   getBook( search:string) {
    
    return  this.http.get<Book[]>(this.url+search);
}

//rechercher des livres par un filtre

getBookFiltred(search :string,filter:string, searchFiltred :string) {
  let url1 =this.url.concat(search,"+",filter,":",searchFiltred);
  return this.http.get<Book[]>(url1);

}

//rechercher un livre par son Id

getBookById(id:string){
  return this.http.get<Book>(this.urlId+id);

}
}