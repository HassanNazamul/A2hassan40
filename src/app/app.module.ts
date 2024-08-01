import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatTabsModule } from '@angular/material/tabs';
import { Headerhassan40Component } from './headerhassan40/headerhassan40.component';
import { Footerhassan40Component } from './footerhassan40/footerhassan40.component';
import { BooksHassan40Component } from './books-hassan40/books-hassan40.component';
import { CampusHassan40Component } from './campus-hassan40/campus-hassan40.component';

import { MaterialModule } from './modules/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    Headerhassan40Component,
    Footerhassan40Component,
    BooksHassan40Component,
    CampusHassan40Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
