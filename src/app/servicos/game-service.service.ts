import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/gameInterfaces.models';
import { Ratings } from '../interfaces/ratings.models';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  private readonly API_URL = 'http://localhost:3000/games'
  private readonly API_KEY = 'https://api.rawg.io/api/games?key=638c56342dc9447fa2df5184a9ecaf99'

  constructor(
    private http: HttpClient
  ) { }

  pegarJogosExternos(){
    return this.http.get(`${this.API_KEY}`)
  }

  cadastrarGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.API_URL, game)
  }

  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.API_URL)
  }

  pegarPorId(id: string): Observable<Game>{
    return this.http.get<Game>(`${this.API_URL}/${id}`)
  }

  pegarPorIdExterno(id: string): Observable<Game>{
    return this.http.get<Game>(`${this.API_URL}/${id}`)
  }

  editarGame(id: string, game: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${id}`, game);
  }


  deletarGame(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`)
  }

  criarAvaliacao(id: string, rating: Ratings): Observable<Game> {
    return this.http.get<Game>(`${this.API_URL}/${id}`).pipe(
      switchMap((game) => {
        if(!game.ratings) {
          game.ratings = []
        }

        game.ratings.push(rating);

        return this.http.put<Game>(`${this.API_URL}/${id}`, game)
      })
    )
  }

}
