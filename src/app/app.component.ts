import {Component, OnInit} from '@angular/core';
import {SpotifyService} from './services/spotify-service/spotify.service';
import {RXBox} from 'rxbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService,
    private store: RXBox
  ) {
  }

  albumsData: any;
  albumList: any;


  async ngOnInit() {
    // login to spotify
    const res: any = await this.spotifyService.login();
    // assign state of user keys
    this.store.assignState(
      {
        spotifyCredentials: {
          accessToken: res.access_token,
          tokenType: res.token_type
        }
      });

    // get albums list
    this.albumsData = await this.spotifyService.loadAlbums();
    this.albumList = this.albumsData.map((album) => album.name);
  }


  changeAlbum(albumData) {
    console.log(albumData);
  }

}
