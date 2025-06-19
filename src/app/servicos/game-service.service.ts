import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/gameInterfaces.models';
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

  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.API_URL)
  }

  pegarPorId(id: string): Observable<Game>{
    return this.http.get<Game>(`${this.API_URL}/${id}`)
  }

  editarGame(id: string, game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.API_URL}/${id}`, game)
  }

  deletarGame(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`)
  }

  // criarAvaliacao(id: string, avaliacao: any): Observable<>

}
