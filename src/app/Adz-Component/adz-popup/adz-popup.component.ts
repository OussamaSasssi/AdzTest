import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/Adz-Model/Book';

@Component({
  selector: 'adz-popup',
  templateUrl: './adz-popup.component.html',
  styleUrls: ['./adz-popup.component.css']
})
export class AdzPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdzPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public book: Book) {
      
     }

  ngOnInit() {
  }

}
