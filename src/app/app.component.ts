import {Component, OnInit} from '@angular/core';
import {SpotifyService} from './services/spotify-service/spotify.service';
import {RXBox} from 'rxbox';
import {AlbumType} from './interfaces/album.interface';
import {DropdownListType} from './interfaces/dropdownList.interface';

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

  albumsData: AlbumType[];
  albumList: DropdownListType[];
  currentAlbum: AlbumType;


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
    this.albumList = this.albumsData.map((album, index) => {
      return {
        label: album.name,
        value: index
      }
    });
  }


  changeAlbum(index) {
    console.log(index);
    this.currentAlbum = this.albumsData[index]
  }

}
