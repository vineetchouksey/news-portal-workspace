import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsStore } from './store/news.store';
import { ActionCard } from 'ui-kit';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ActionCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('news-mfe');
  readonly store = inject(NewsStore);

  ngOnInit() {
    this.store.loadNews();
  }

  onReadMore() {
    console.log('ActionCard: read more clicked');
  }
}
