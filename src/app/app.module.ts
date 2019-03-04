import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';


import {DropdownAlbumsModule} from './components/dropdown-albums/dropdown-albums.module';
import {ApiService} from './services/api/api.service';
import {SpotifyService} from './services/spotify-service/spotify.service';
import {RXBox} from 'rxbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    DropdownAlbumsModule
  ],
  providers: [
    ApiService,
    SpotifyService,
    RXBox
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
