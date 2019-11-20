import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdzRechercheComponent } from './Adz-Component/adz-recherche/adz-recherche.component';
import { AdzListeComponent } from './Adz-Component/adz-liste/adz-liste.component';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { AdzPopupComponent } from './Adz-Component/adz-popup/adz-popup.component';




@NgModule({
  declarations: [
    AppComponent,
    AdzRechercheComponent,
    AdzListeComponent,
    AdzPopupComponent
  ],
  imports: [
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([


    ])

  ],
  providers: [],
  entryComponents: [AdzPopupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
