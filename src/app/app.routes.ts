import { Routes } from '@angular/router';
import { GameListComponentComponent } from './pages/listar/game-list-component/game-list-component.component';
import { GameDetailComponentComponent } from './pages/detalhes/game-detail-component/game-detail-component.component';
import { GameFormComponentComponent } from './pages/form/game-form-component/game-form-component.component';
import { TopGamesComponentComponent } from './pages/topGames/top-games-component/top-games-component.component';
import { RatingFormComponentComponent } from './pages/rating/rating-form-component/rating-form-component.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path: 'listar',
    component: GameListComponentComponent
  },
  {
    path: 'detalhes',
    component: GameDetailComponentComponent
  },
  {
    path: 'form',
    component: GameFormComponentComponent
  },
  {
    path: 'form/:id',
    component: GameFormComponentComponent
  },
  {
    path: 'topGames',
    component: TopGamesComponentComponent
  },
  {
    path: 'games/:id/avaliar',
    component: RatingFormComponentComponent
  }
];
