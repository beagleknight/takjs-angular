import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { TakService } from './tak.service';
import { BoardComponent } from './board/board.component';
import { FillPipe } from './fill.pipe';
import { CellComponent } from './cell/cell.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FillPipe,
    CellComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TakService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
