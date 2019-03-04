import {NgModule} from '@angular/core';

import {DropdownAlbumsComponent} from './dropdown-albums.component';
import {ApiService} from '../../services/api/api.service';
import {SpotifyService} from '../../services/spotify-service/spotify.service';


@NgModule({
  declarations: [
    DropdownAlbumsComponent
  ],
  imports: [],
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
