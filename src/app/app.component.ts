import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponentComponent } from "./pages/navBar/nav-bar-component/nav-bar-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'game-review-hub';
}
