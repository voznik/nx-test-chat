import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  Observable,
  fromEvent,
  of,
  merge,
  OperatorFunction,
  EMPTY,
  ObservableInput,
} from 'rxjs';
import { catchError, mapTo, startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class Network {
  static instance: Network | null = null;

  /** Observable to listen when Internet connection availability changes */
  onlineChanges: Observable<boolean>;

  /** Check if Internet connection is available */
  get online(): boolean {
    return isPlatformBrowser(this.platformId) ? navigator.onLine : true;
  }

  /**
   * Catch offline errors (no Internet connection) and server errors (HTTP status 5xx)
   * and redirect to `/offline` or `/unavailable` page (routes can be changed via `OfflineModule.forRoot()`)
   */
  static catchOffline<T>(): OperatorFunction<T, T> {
    return catchError<T, ObservableInput<T>>(Network.catchCallback);
  }

  protected static catchCallback<T>(error: unknown): Observable<T> {
    if (!Network.instance) {
      console.log(
        `You need to inject the Network service at least once, for example in your AppComponent constructor.`
      );

      throw error;
    } else {
      if (!Network.instance.online) {
        return EMPTY;
      } else if (
        error instanceof HttpErrorResponse &&
        error.status >= 500 &&
        error.status < 600
      ) {
        return EMPTY;
      } else {
        throw error;
      }
    }
  }

  constructor(@Inject(PLATFORM_ID) protected platformId: string) {
    /* Store instance in a static property to allow access to injected services in the RxJS static operator
     * Should be done only once */
    if (!Network.instance) {
      Network.instance = this;
    }

    this.onlineChanges = !isPlatformBrowser(this.platformId)
      ? of(true)
      : merge(
          fromEvent(window, 'online').pipe(mapTo(true)),
          fromEvent(window, 'offline').pipe(mapTo(false))
        ).pipe(startWith(this.online));
  }
}

/**
 * Catch offline errors (no Internet connection) and server errors (HTTP status 5xx)
 * and redirect to `/offline` or `/unavailable` page (routes can be changed via `OfflineModule.forRoot()`)
 */
export const catchOffline = Network.catchOffline;
