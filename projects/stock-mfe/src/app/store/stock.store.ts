import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

export const StockStore = signalStore(
  { providedIn: 'root' },
  withState({
    price: '0.00',
    symbol: 'BTCUSDT',
    connected: false,
  }),
  withMethods((store) => ({
    // Connect to Binance WebSocket for real-time Bitcoin price
    connectToMarket: rxMethod<void>(
      pipe(
        switchMap(() => {
          const socket$ = webSocket<any>(`wss://stream.binance.com:9443/ws/btcusdt@trade`);
          patchState(store, { connected: true });

          return socket$.pipe(
            tap((data) => {
              // 'p' is the price field in Binance's payload
              console.log('Received data from WebSocket:', data);
              patchState(store, { price: parseFloat(data.p).toFixed(2) });
            }),
          );
        }),
      ),
    ),
  })),
);
