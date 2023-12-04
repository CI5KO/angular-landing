import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Favorites games for {{ username }}</h3>
    <ul>
      @for(game of games; track game.id) {
      <li (click)="favorite(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username: string | undefined = ''
  @Output() addFavoriteEvent = new EventEmitter<string>()

  favorite(game: string) {
    this.addFavoriteEvent.emit(game)
  }

  games = [
    {
      id: 1,
      name: 'GTA V'
    },
    {
      id: 2,
      name: 'Halo'
    },
    {
      id: 3,
      name: 'Rocket League'
    }
  ]
}
