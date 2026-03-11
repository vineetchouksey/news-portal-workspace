import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionCard, DataTable } from 'ui-kit';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ActionCard, DataTable],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('shell');

  onReadMore() {
    console.log('ActionCard: read more clicked');
  }
}
