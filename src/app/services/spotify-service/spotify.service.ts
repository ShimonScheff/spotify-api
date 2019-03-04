import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {SpotifyConfig} from '../../app.config';
import {RXBox} from 'rxbox';
import {map} from 'rxjs/operators';
import {AlbumType} from '../../interfaces/album.interface';
import {ApiService} from '../api/api.service';
import {getLoginUrl} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private clientId = SpotifyConfig.CLIENT_ID;
  private clientSecret = SpotifyConfig.CLIENT_SECRET;

  static createAlbumObj(albumData) {
    return {
      coverImage: albumData.images[0].url,
      name: albumData.name,
      releaseDate: albumData.release_date
    };
  }


  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private store: RXBox,
  ) {
  }


  login() {
    const url = getLoginUrl();
    const body = 'grant_type=client_credentials';
    const headers = this.createLoginHeaders();


    return this.apiService.post(url, body, headers).toPromise();
  }


  createLoginHeaders() {
    const obj: any = {
      Authorization: 'Basic  ' + btoa(this.clientId + ':' + this.clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded;'
    };


    return obj;
  }


  async loadAlbums(): Promise<AlbumType[]> {
    const headers = this.creatTokenHeader();
    const url = 'https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C/albums?limit=20&offset=0';

    const res: any = await this.apiService.get(url, headers)
      .pipe(map((res: any) => res.items)).toPromise();

    return res.filter(item => {
      return item.album_type === 'album';
    }).map(album => {
      return SpotifyService.createAlbumObj(album);
    });
  }


  private creatTokenHeader() {
    const tokenType = this.store.getState()['spotifyCredentials']['tokenType'];
    const accessToken = this.store.getState()['spotifyCredentials']['accessToken'];

    return {
      Authorization: tokenType + ' ' + accessToken
    };
  }
}
