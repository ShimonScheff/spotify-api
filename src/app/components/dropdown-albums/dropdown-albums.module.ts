import {NgModule} from '@angular/core';

import {DropdownAlbumsComponent} from './dropdown-albums.component';
import {ApiService} from '../../services/api/api.service';
import {SpotifyService} from '../../services/spotify-service/spotify.service';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    DropdownAlbumsComponent
  ],
  imports: [BrowserModule],
  providers: [
    SpotifyService,
    ApiService
  ],
  exports: [
    DropdownAlbumsComponent
  ]
})
export class DropdownAlbumsModule {
}
