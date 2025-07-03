import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-games-component.component.html',
  styleUrls: ['./top-games-component.component.scss']
})
export class TopGamesComponent implements OnInit {
  jogos: any[] = [];
  private readonly API_KEY = '638c56342dc9447fa2df5184a9ecaf99';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any>(`https://api.rawg.io/api/games?key=${this.API_KEY}&ordering=-rating&page_size=10`)
      .subscribe((res) => {
        this.jogos = res.results;
      }, (err) => {
        console.error('Erro ao buscar top games:', err);
      });
  }

  voltar() {
    this.router.navigate(['/listar'])
  }
}
