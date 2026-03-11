import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionCard } from 'ui-kit';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { StockStore } from './store/stock.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ActionCard, CardModule, TagModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('stock-mfe');
  readonly store = inject(StockStore);

  ngOnInit() {
    this.store.connectToMarket();
  }
}
