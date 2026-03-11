import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionCard } from 'ui-kit';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ActionCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('stock-mfe');

  onReadMore() {
    console.log('ActionCard: read more clicked');
  }
}
