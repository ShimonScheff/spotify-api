import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {SpotifyService} from '../../services/spotify-service/spotify.service';

@Component({
  selector: 'app-dropdown-albums',
  templateUrl: './dropdown-albums.component.html',
  styleUrls: ['./dropdown-albums.component.scss']
})
export class DropdownAlbumsComponent implements OnInit {
  @Output('currentAlbum') selectedChange = new EventEmitter();
  @Input('list') list = [];

  constructor(
    private spotifyService: SpotifyService
  ) {
  }

  async ngOnInit() {


    // await this.spotifyService.loadAlbums();

    /*  const res = await this.apiService.get('https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C/albums?limit=20&offset=0')
        .toPromise();
      console.log(res);*/
  }

  onSelect(selectedAlbum) {
    console.log(selectedAlbum);
    this.selectedChange.emit(selectedAlbum);
  }

}
