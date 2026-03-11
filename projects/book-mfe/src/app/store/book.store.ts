import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { BookInterface, initialBookSlice } from './book.slice';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

export const BookStore = signalStore(
  { providedIn: 'root' },
  withState(initialBookSlice),
  withMethods((store, http = inject(HttpClient)) => ({
    loadBooks: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap(() =>
          http.get<BookInterface[]>('https://potterapi-fedeperin.vercel.app/en/books'),
        ),
        tap((response: BookInterface[]) => patchState(store, { books: response, loading: false })),
      ),
    ),
  })),
);
