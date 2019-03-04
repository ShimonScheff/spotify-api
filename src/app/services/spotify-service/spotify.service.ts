import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {SpotifyConfig} from '../../app.config';
import {Observable} from 'rxjs';
import {RXBox} from 'rxbox';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private clientId = SpotifyConfig.CLIENT_ID;
  private clientSecret = SpotifyConfig.CLIENT_SECRET;

  static createAlbumObj(albumData) {
    return {
      coverImages: albumData.images,
      name: albumData.name,
      releaseDate: albumData.release_date
    };
  }


  constructor(
    private http: HttpClient,
    private store: RXBox,
  ) {
  }


  login() {
    //  using proxy for 'https://accounts.spotify.com/api/token';
    const url = '/api/token';

    const body = 'grant_type=client_credentials';
    const headers = this.createLoginHeaders();


    return this.http.post(url, body, {headers}).toPromise();
  }


  createLoginHeaders() {
    const obj: any = {
      Authorization: 'Basic  ' + btoa(this.clientId + ':' + this.clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded;'
    };


    return obj;
  }


  async loadAlbums() {
    const headers = this.creatTokenHeader();
    const res: any = await this.http.get(
      'https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C/albums?limit=20&offset=0',
      {headers})
      .pipe(map((res: any) => res.items)).toPromise();

    let albums = res.filter(item => {
      return item.album_type === 'album';
    }).map(album => {
      return SpotifyService.createAlbumObj(album);
    });

    return albums;
  }


  private creatTokenHeader() {
    const tokenType = this.store.getState()['spotifyCredentials']['tokenType'];
    const accessToken = this.store.getState()['spotifyCredentials']['accessToken'];

    return {
      Authorization: tokenType + ' ' + accessToken
    };
  }
}
