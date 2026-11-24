import { inject, Injectable, signal } from '@angular/core';
import { Album } from '../shared/interfaces/album.interface';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { empty, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class AlbumsService {

  private readonly http = inject(HttpClient);

  /**
   * Adds new album record to database
   * Body consists of `albumName` and `artistName`
   * @param body 
   * @returns 
   */
  addAlbum(body: FormGroup): Observable<Album[]> {
    return this.http.post<Album[]>(`${environment.baseURL}/album`, body);
  }

  /**
   * Retrieves all albums from database
   * @returns 
   */
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${environment.baseURL}/album`);
  }
}
