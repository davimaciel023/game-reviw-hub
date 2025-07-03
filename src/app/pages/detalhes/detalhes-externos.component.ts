import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-externos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-externos.component.html',
  styleUrls: ['./detalhes-externos.component.scss']
})
export class DetalhesExternosComponent {
  game: any;
  generos: string = '';
  plataformas: string = '';
  descricaoTraduzida: string = '';

  private readonly API_KEY = '638c56342dc9447fa2df5184a9ecaf99';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://api.rawg.io/api/games/${id}?key=${this.API_KEY}`).subscribe((res: any) => {
      this.game = res;
      this.generos = res.genres.map((g: any) => g.name).join(', ');
      this.plataformas = res.platforms.map((p: any) => p.platform.name).join(', ');
      this.traduzirDescricao(res.description_raw);
    });
  }

  traduzirDescricao(textoOriginal: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      q: textoOriginal,
      source: 'en',
      target: 'pt',
      format: 'text'
    };

    this.http.post<any>('https://translate.astian.org/translate', body, { headers })
      .subscribe({
        next: (res) => {
          this.descricaoTraduzida = res.translatedText;
        },
        error: (err) => {
          console.error('Erro ao traduzir:', err);
          this.descricaoTraduzida = '⚠️ Não foi possível traduzir a descrição.';
        }
      });
  }
}
