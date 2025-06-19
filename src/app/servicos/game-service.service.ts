import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/gameInterfaces.models';
import { Ratings } from '../interfaces/gameInterfaces.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  private readonly API_URL = 'http://localhost:3000/games'

  constructor(
    private http: HttpClient
  ) { }

  cadastrarGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.API_URL, game)
  }

}
