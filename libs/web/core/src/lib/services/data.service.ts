import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject, timer } from 'rxjs';
import {
  catchError,
  delayWhen,
  retryWhen,
  share,
  takeWhile,
  tap,
} from 'rxjs/operators';
import {
  webSocket,
  WebSocketSubject,
  WebSocketSubjectConfig,
} from 'rxjs/webSocket';
import { environment } from '../environments/environment';
//
export const WS_ENDPOINT = environment.wsEndpoint;
export const RECONNECT_INTERVAL = environment.reconnectInterval;
export const RECONNECT_ATTEMPTS = environment.reconnectAttempts;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = WS_ENDPOINT;
  // private inputStream: QueueingSubject<string>;
  private socket: WebSocketSubject<any>;
  private connection = new Subject();
  public connection$ = this.connection.pipe(share());
  private stream = new Subject();
  public stream$ = this.stream.pipe(
    catchError((e) => {
      throw e;
    })
  );

  constructor() {}

  /**
   * Creates a new WebSocket subject and send it to the stream subject
   * @param cfg if true the observable will be retried.
   */
  connect(cfg = { reconnect: false, queryParams: undefined }): void {
    if (!this.socket || this.socket.closed) {
      this.socket = this.getNewWebSocket(cfg);
      const stream = this.socket
        .pipe(
          cfg.reconnect ? this.reconnect : (_) => _,
          tap({
            next: (data) => console.log('[DataService]: data next', data),
            error: (err) => console.log('[DataService]: data error', err),
            complete: () => console.log('[DataService]: data complete'),
          }),
          catchError((err) => EMPTY)
        )
        .subscribe(this.stream);
      // // TODO: only next an observable if a new subscription was made
      this.stream.next(stream);
    }
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.complete();
      this.socket = undefined;
      this.connection.next(false);
      this.connection.complete();
    }
  }

  sendMessage(event: string = 'events', data?: any): void {
    this.socket.next({
      event,
      data,
    });
  }

  /**
   * Return a custom WebSocket subject which reconnects after failure
   */
  private getNewWebSocket(options?: any): WebSocketSubject<any> {
    const url = options.queryParams
      ? `${WS_ENDPOINT}?${options.queryParams}`
      : WS_ENDPOINT;
    const wsSubjectConfig: WebSocketSubjectConfig<any> = {
      url,
      openObserver: {
        next: (e: Event) => {
          console.log('[DataService]: connection ok');
          this.connection.next(true);
        },
      },
      closeObserver: {
        next: (e: CloseEvent) => {
          console.log('[DataService]: connection closed');
          this.socket = null;
          this.connection.next(false);
          // this.connect({ reconnect: true });
        },
      },
    };
    return webSocket(wsSubjectConfig);
  }

  /**
   * Retry a given observable by a time span
   * @param observable the observable to be retried
   */
  private reconnect(observable: Observable<any>): Observable<any> {
    return observable.pipe(
      retryWhen((errors) =>
        errors.pipe(
          tap((val) => console.log('[Data Service] Try to reconnect', val)),
          delayWhen((_) => timer(RECONNECT_INTERVAL)),
          takeWhile((_, index) => {
            return index < RECONNECT_ATTEMPTS && !this.socket;
          })
        )
      )
    );
  }
}
