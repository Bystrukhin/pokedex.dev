import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { SelectedGridListComponent } from './selected-grid-list/selected-grid-list.component';
import { NoConflictStyleCompatibilityMode } from '@angular/material';
import { CardComponent } from './card/card.component';
import { SelectedCardComponent } from './selected-card/selected-card.component';
import { FavoriteDirective } from './directives/favorite.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    GridListComponent,
    SelectedGridListComponent,
    CardComponent,
    SelectedCardComponent,
    FavoriteDirective,
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    NoConflictStyleCompatibilityMode,
    MatButtonModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
