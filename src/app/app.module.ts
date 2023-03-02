import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';
import { PagePregameComponent } from './page-pregame/page-pregame.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { PageGameComponent } from './page-game/page-game.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWelcomeComponent,
    PagePregameComponent,
    PageGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
