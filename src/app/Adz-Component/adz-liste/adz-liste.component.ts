import { Component, OnInit, getDebugNode } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from 'src/app/Adz-Model/Book'
import { AdzBookService } from 'src/app/Adz-Service/adz-book.service';
import { MatDialog } from '@angular/material/dialog';
import {AdzPopupComponent} from '../adz-popup/adz-popup.component';

@Component({
  selector: 'adz-liste',
  templateUrl: './adz-liste.component.html',
  styleUrls: ['./adz-liste.component.css']
})
export class AdzListeComponent implements OnInit {
  search1: string;//input de la page de recherche
  books: Book[];
  filterSearch: string;//saisie dans le filtre 
  filter: string;//type de filtre
  book: Book;
  authors: string[] = [];
  categories: string[] = [];
  filters = [{ label: 'Categories', value: 'subject' }, { label: 'Auteurs', value: 'inauthor' }];




  constructor(private route: ActivatedRoute, private bookService: AdzBookService,public dialog: MatDialog) { }
  //lors de l'initialisation de la page on charge les livres selon la recherche 
  ngOnInit() {
    //recuperer l'input de la recherche de l'url
    this.search1 = this.route.snapshot.paramMap.get('search');
    
    //recuperer les livres 
    this.bookService.getBook(this.search1).subscribe((response: any) => {
      this.books = response.items;
      this.authors = this.createArray('authors');
      this.categories = this.createArray('categories');
      

      
    });

  }

  createArray(propertyName: string): string[] {
    let array: any = this.books.map(x => x.volumeInfo[propertyName]);
    return array.filter(x => x).flat();
  }





  onClick() {


    this.bookService.getBookFiltred(this.search1, this.filter, this.filterSearch).subscribe((response:any) => {
      this.books = response.items;
      

    });
  }


  getOne(id: string) {
    this.bookService.getBookById(id).subscribe((response) => {
      this.book = response
      this.dialog.open(AdzPopupComponent, {
        
        data: this.book
      });
    });


  }




}