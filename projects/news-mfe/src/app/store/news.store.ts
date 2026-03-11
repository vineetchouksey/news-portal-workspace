import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { ArticleInterface, initialNewsSlice, NewsResponseInterface } from './news.slice';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

export const NewsStore = signalStore(
  { providedIn: 'root' },
  withState(initialNewsSlice),
  withMethods((store, http = inject(HttpClient)) => ({
    loadNews: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap(() =>
          http.get<NewsResponseInterface>(
            'https://api.spaceflightnewsapi.net/v4/articles/?limit=10',
          ),
        ),
        tap((response: NewsResponseInterface) =>
          patchState(store, { articles: response.results, loading: false }),
        ),
      ),
    ),
  })),
);
