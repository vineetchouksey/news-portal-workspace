import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTable } from 'ui-kit';
import { BookStore } from './store/book.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataTable],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('book-mfe');

  readonly bookStore = inject(BookStore);

  ngOnInit() {
    this.bookStore.loadBooks();
  }
}
